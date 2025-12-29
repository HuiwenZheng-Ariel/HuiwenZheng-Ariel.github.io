import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
import tailwindcss from "@tailwindcss/postcss";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Huiwen's Page",
  description: "Huiwen's Page",

  alias: {
    "@": path.resolve(__dirname, "../.vuepress"),
  },

  bundler: viteBundler({
    // vite options
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss()],
        },
      },
    },
  }),

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
