import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  // Keep generated source maps out of the deployed Worker bundle. Cloudflare
  // caps uploaded source maps at 15 MiB compressed; this app exceeds that cap.
  build: {
    sourcemap: false,
  },
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
