# 🔐 Google OAuth Setup Checklist

## ❌ Problema Comum

Você está recebendo redirect para `http://localhost:3000/#access_token=...` mesmo tendo hardcodado a URL correta no backend?

**Causa:** Supabase Dashboard tem `http://localhost:3000` cadastrado como URL de redirect válida.

---

## ✅ Solução: Configurar Supabase Dashboard

### Passo 1: Acesse o Dashboard
1. Vá para: https://supabase.com/dashboard
2. Selecione seu projeto: `aidgzigjhgteoocrewwh`
3. Menu esquerdo: **Authentication** → **URL Configuration**

### Passo 2: Atualize Redirect URLs

**Remova:**
- ❌ `http://localhost:3000/*` (se existir)
- ❌ `http://localhost:3000/#*` (se existir)
- ❌ Qualquer URL de teste/dev antiga

**Adicione APENAS:**
- ✅ `https://4d8wf50z-3000.brs.devtunnels.ms/auth/callback`

**Para Produção (depois):**
- ✅ `https://yourdomain.com/auth/callback`

### Passo 3: Salvar

Clique em **Save** e aguarde confirmar

---

## 🔍 Verificação

Depois de atualizar o Supabase:

```bash
# 1. Teste a rota
curl -X POST http://localhost:4000/api/auth/signin/google \
  -H "Content-Type: application/json" \
  -d '{"redirectTo":"https://4d8wf50z-3000.brs.devtunnels.ms/auth/callback"}'

# 2. Verifique os logs do backend
# Deve aparecer: "[Google OAuth] Redirect URL configured: ..."
```

---

## 🧪 Fluxo Correto

```
1. Frontend → POST /api/auth/signin/google
2. Backend → Supabase (com redirectTo)
3. Supabase valida redirectTo contra Whitelist do Dashboard
4. Se tiver na whitelist: Redireciona para Google
5. Google autentica
6. Google redireciona para: https://4d8wf50z-3000.brs.devtunnels.ms/auth/callback?code=...
7. Frontend captura o token
```

---

## 📋 Variáveis de Ambiente

Certifique-se de ter no `.env`:

```env
APP_URL=https://4d8wf50z-3000.brs.devtunnels.ms
SUPABASE_URL=https://aidgzigjhgteoocrewwh.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi...
```

---

## 🔗 Links Úteis

- Supabase Dashboard: https://supabase.com/dashboard
- Google OAuth Console: https://console.developers.google.com
- Supabase OAuth Docs: https://supabase.com/docs/guides/auth/social-login/auth-google

---

## ❓ Se Ainda Não Funcionar

1. **Limpe cache do navegador:** Ctrl+Shift+Del
2. **Aguarde 1-2 minutos** após salvar no Supabase
3. **Verifique nos logs:** Se mostra a URL correta?
4. **Teste em navegação privada/anônima**
5. **Verifique seu APP_URL no .env**

---

## ✨ Dica Final

Se quiser testar **localmente** sem Dev Tunnel:

```env
APP_URL=http://localhost:3000
```

Mas **ANTES** adicione ao Supabase Dashboard:
- `http://localhost:3000/auth/callback`

Isso vai funcionar localmente, mas depois mude para a URL de produção quando fazer deploy.
