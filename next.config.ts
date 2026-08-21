import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

/*
  No `images` block: the site ships no raster imagery, so there is no remote
  pattern to allow and no image optimiser in the request path. The previous config
  allowed images.unsplash.com, which nothing referenced even before the photography
  came out.
*/
const nextConfig: NextConfig = {
  turbopack: {
    root,
  },
};

export default nextConfig;
