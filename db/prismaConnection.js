import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  global["prisma"] = global["prisma"] || new PrismaClient();
  prisma = global["prisma"];
} else {
  prisma = new PrismaClient();
}

export default prisma;
