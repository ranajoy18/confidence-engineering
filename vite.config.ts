import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // GitHub Pages serves this project from /portfolio/.
    base: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    server: { entry: "server" },
    // Prerender to static HTML so the build can be hosted on GitHub Pages.
    prerender: { enabled: true, crawlLinks: true },
  },
});
