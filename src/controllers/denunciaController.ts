import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { DenunciaService } from "../services/denunciaService";
import { UserService } from "../services/dbService";

export const list = async (req: Request, res: Response): Promise<void> => {
  try {
    const lat = req.query.lat ? parseFloat(req.query.lat as string) : null;
    const lng = req.query.lng ? parseFloat(req.query.lng as string) : null;
    const radius = parseInt((req.query.radius as string) || "2000");
    const skip = parseInt((req.query.skip as string) || "0");
    const take = parseInt((req.query.take as string) || "20");
    // Determine logged-in user ID, if provided by Authorization header (optional)
    let loggedInUserId: string | null = req.query.userId ? (req.query.userId as string) : null;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      try {
        const token = authHeader.substring(7);
        const supabase = req.app.locals.supabase;
        if (supabase) {
          const { data } = await supabase.auth.getUser(token);
          if (data && data.user) {
            loggedInUserId = data.user.id;
          }
        }
      } catch (err) {
        // If token invalid or supabase fails, we'll silently ignore and use query param or null
        console.warn("Optional auth failed while fetching logged-in user:", err);
      }
    }

    const result = await DenunciaService.getDenunciasInRadius(loggedInUserId, lat, lng, radius, skip, take);
    res.status(200).json(result);
  } catch (error) {
    console.error("DenunciaController.list error:", error);
    res.status(500).json({ error: "Failed to fetch denuncias" });
  }
};

export const create = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { titulo, descricao, medias, tags, lat, lng } = req.body;
    const userId = req.user?.id;
    if (userId) {
      // Ensure local DB user exists for authenticated supabase user
      const dbUser = await UserService.getUserById(userId);
      if (!dbUser) {
        const name = req.user?.user_metadata?.display_name || req.user?.email || "";
        try {
          await UserService.createUser(userId, req.user?.email || "", name);
        } catch (dbErr) {
          console.warn("Failed to create local DB user for authenticated user:", dbErr);
        }
      }
    }
    if (!userId) {
      res.status(401).json({ error: "Unauthenticated. Provide a valid token." });
      return;
    }
    if (!titulo || lat == null || lng == null) {
      res.status(400).json({ error: "titulo, lat and lng are required" });
      return;
    }

    const result = await DenunciaService.createDenuncia(userId, titulo, descricao ?? null, medias ?? [], tags ?? [], lat, lng);
    res.status(201).json(result);
  } catch (error) {
    console.error("DenunciaController.create error:", error);
    res.status(500).json({ error: "Failed to create denuncia" });
  }
};

export const addComment = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const denunciaId = req.params.id;
    const { texto, medias } = req.body;
    const userId = req.user?.id;
    if (userId) {
      const dbUser = await UserService.getUserById(userId);
      if (!dbUser) {
        const name = req.user?.user_metadata?.display_name || req.user?.email || "";
        try {
          await UserService.createUser(userId, req.user?.email || "", name);
        } catch (dbErr) {
          console.warn("Failed to create local DB user for comment author:", dbErr);
        }
      }
    }
    if (!userId || !texto) {
      res.status(400).json({ error: "texto is required and token must be provided" });
      return;
    }
    const comment = await DenunciaService.addComment(denunciaId, userId, texto, medias ?? []);
    res.status(201).json(comment);
  } catch (error) {
    console.error("DenunciaController.addComment error:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
};

export const createMock = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { lat, lng } = req.body;
    const count = req.body.count ? parseInt(req.body.count as string) : 10;
    if (lat == null || lng == null) {
      res.status(400).json({ error: "lat and lng are required" });
      return;
    }
    if (isNaN(count) || count <= 0 || count > 1000) {
      res.status(400).json({ error: "count must be a positive integer up to 1000" });
      return;
    }
    if (!userId) {
      res.status(401).json({ error: "Unauthenticated. Provide a valid token." });
      return;
    }
    // Ensure local DB user exists
    const dbUser = await UserService.getUserById(userId);
    if (!dbUser) {
      const name = req.user?.user_metadata?.display_name || req.user?.email || "";
      try {
        await UserService.createUser(userId, req.user?.email || "", name);
      } catch (dbErr) {
        console.warn("Failed to create local DB user for mock creation:", dbErr);
      }
    }
    const result = await DenunciaService.createMockDenuncias(userId, parseFloat(lat as any), parseFloat(lng as any), count);
    res.status(201).json(result);
  } catch (error) {
    console.error("DenunciaController.createMock error:", error);
    res.status(500).json({ error: "Failed to create mock denuncias" });
  }
};
