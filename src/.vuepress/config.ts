import { defineUserConfig, viteBundler } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  alias: {
    "@": path.resolve(__dirname, "../.vuepress"),
  },

  base: "/",

  bundler: viteBundler({
    // vite options
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    },
  }),

  locales: {
    "/": {
      lang: "en-US",
      title: "Huiwen's Page",
      description: "Huiwen's Page",
    },
  },

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
