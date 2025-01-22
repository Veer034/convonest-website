import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti.esmResolve("./src/env/server.ts");
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // typedRoutes: true, // it will check if any route is exist or not
  },
  output: "export", // Enable static export
  distDir: "out", // Specify output folder (default is "out")
  trailingSlash: true, // Add trailing slashes for directories
  images: {
    unoptimized: true, // For images, since we won't use Next.js image optimization
  },
};

export default nextConfig;
