import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("POSTGRES_PRISMA_URL"),
    // directUrl: env("POSTGRES_URL_NON_POOLING"),
  },
});
