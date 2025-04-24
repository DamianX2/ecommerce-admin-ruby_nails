import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-unused-vars
  let prisma: PrismaClient | undefined;
}

const prismadb = (globalThis as any).prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  (globalThis as any).prisma = prismadb;

export default prismadb;
