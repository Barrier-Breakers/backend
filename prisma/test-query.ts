import { DenunciaService } from "../src/services/denunciaService";
import prisma from "../src/db/prisma";

async function run() {
	console.log('⏳ Testing DenunciaService.getDenunciasInRadius (null coords)');
	const r1 = await DenunciaService.getDenunciasInRadius(null, null, null, 2000, 0, 5);
	console.log('Result count:', r1.denuncias.length, 'Total:', r1.total);
	console.log('Sample denuncia with comentarios:', JSON.stringify(r1.denuncias[0], null, 2));
	
	console.log('⏳ Testing with coords around São Paulo');
	// Pass a logged-in user id to verify mine flag
	const user = await prisma.user.findFirst();
	const loggedInUserId = user ? user.id : null;
	const r2 = await DenunciaService.getDenunciasInRadius(loggedInUserId, -23.55052, -46.633308, 2000, 0, 5);
	console.log('Result count:', r2.denuncias.length, 'Total:', r2.total);
	console.log('Sample denuncia with comentarios:', JSON.stringify(r2.denuncias[0], null, 2));
}

run().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
