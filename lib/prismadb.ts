import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

interface CustomGlobalThis {
  prisma?: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
const globalWithPrisma = globalThis as unknown as CustomGlobalThis;

const prismadb = globalWithPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalWithPrisma.prisma = prismadb;

export default prismadb;
