import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        watch: {
            usePolling: true,
        },
    },
    assetsInclude: ["**/*.gltf", "**/*.glb"],
});