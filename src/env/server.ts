import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

console.log("File is being executed");

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.string(),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
