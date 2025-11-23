const generated = require('../dist/generated/prisma');
console.log('Generated ModelName (exports.Prima.ModelName):', generated.Prisma.ModelName);
const { PrismaClient } = require('../dist/generated/prisma/client');
const client = new PrismaClient({});
console.log('instantiated client models:', client._runtimeDataModel ? Object.keys(client._runtimeDataModel.models) : null);
client.$disconnect();
