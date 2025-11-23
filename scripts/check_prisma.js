const { PrismaClient } = require('../dist/generated/prisma/client');
const prisma = new PrismaClient();
console.log('Generated client keys:', Object.keys(prisma));
(async () => {
  try {
    const res = await prisma.$queryRaw`SELECT 1`;
    console.log('DB raw query ok');
  } catch (err) {
    console.error('DB query error', err?.message || err);
  } finally {
    await prisma.$disconnect();
  }
})();