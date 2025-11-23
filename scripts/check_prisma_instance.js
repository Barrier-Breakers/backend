const prisma = require('../dist/db/prisma').default;
console.log('prisma keys:', Object.keys(prisma));
console.log('has proposicao?', !!prisma.proposicao);
if (prisma._runtimeDataModel) {
	console.log('runtimeDataModel models:', Object.keys(prisma._runtimeDataModel.models || {}));
} else {
	console.log('no _runtimeDataModel property present');
}
(async ()=>{try{ const has = !!prisma.proposicao; console.log('proposicao keys', has? Object.keys(prisma.proposicao) : 'none'); await prisma.$disconnect(); }catch(e){console.error(e);} })();