import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                show: resolve(__dirname, "./show.html"),
                cart: resolve(__dirname, "./chitiet.html"),
                chitiet: resolve(__dirname, "./chitiets.html"),
                show: resolve(__dirname, "./thanhtoan.html"),
            },
        },
    },
})