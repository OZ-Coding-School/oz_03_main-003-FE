import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
    server: {
        host: "localhost", // 이 부분이 localhost로 설정되어야 합니다
        port: 5173, // 원하는 포트 번호로 설정합니다
        open: true, // 브라우저 자동 열기 옵션 (선택 사항)
        proxy: {
            "/api": {
                target: "https://emotree.yoyobar.xyz",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, "/api"),
            },
        },
    },
});
