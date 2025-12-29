import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://HuiwenZheng-Ariel.github.io",

  author: {
    name: "Huiwen Zheng",
    url: "https://HuiwenZheng-Ariel.github.io",
  },

  logo: "/memoji.png",

  repo: "HuiwenZheng-Ariel/HuiwenZheng-Ariel.github.io",

  docsBranch: "main",

  docsDir: "src",

  // navbar
  navbar,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Outlook", "Search"],
  },

  // sidebar
  sidebar,

  footer: "CC BY-NC-SA 4.0 Licensed | Made with ❤️",

  displayFooter: true,

  blog: {
    description:
      "Fledgling Disability Rights Advocate, Mooter, Believer, and Feminist",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:huiwen.zheng@utexas.edu",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      Gmail: "mailto:zhw.zhw022@gmail.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      Linkedin: "https://www.linkedin.com/in/huiwen-zheng-a10aab1b3/",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // metaLocales: {
  //   editLink: "Edit this page on GitHub",
  // },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install @mathjax/src before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    blog: true,

    components: {
      components: ["Badge", "BiliBili", "CodePen", "PDF"],
    },

    comment: {
      provider: "Giscus",
      repo: "HuiwenZheng-Ariel/HuiwenZheng-Ariel.github.io",
      repoId: "R_kgDOJTeE0A",
      category: "Announcements",
      categoryId: "DIC_kwDOJTeE0M4CVlk2",
      // lightTheme: "light_high_contrast",
      lightTheme: "transparent_dark",
      darkTheme: "transparent_dark",
    },

    icon: {
      assets: "iconify",
    },

    copyright: {
      // 全局启用版权信息
      global: true,
      // 禁用复制
      disableCopy: false,
      // 版权信息
      license: "CC BY-NC-SA 4.0",
    },

    git: {
      // 展示贡献者
      contributors: false,
      // 展示创建时间
      createdTime: false,
      // 展示最后更新时间
      updatedTime: true,
    },
  },

  sidebarSorter: ["readme", "order", "date", "title", "filename"],
});
