import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://HuiwenZheng-Ariel.github.io",

  author: {
    name: "HuiwenZheng-Ariel",
    url: "https://HuiwenZheng-Ariel.github.io",
  },

  // iconAssets: "iconfont",
  iconAssets: "iconify",

  logo: "/memoji.png",

  repo: "HuiwenZheng-Ariel/HuiwenZheng-Ariel.github.io",

  docsBranch: "main",

  docsDir: "src",

  blog: {
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://space.bilibili.com/13229205",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:zhw.zhw022@stu.pku.edu.cn",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://github.com/TeddyHuang-00",
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
    },
    roundAvatar: true,
  },

  headerDepth: 2,

  locales: {
    /**
     * Chinese locale config
     */

    /**
     * English locale config
     */
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "CC BY-NC-SA 4.0 Licensed | Made with ❤️",

      displayFooter: true,

      blog: {
        description:
          "Fledgling Disability Rights Advocate, Mooter, Believer, and Feminist",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page",
      },
    },
  },

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Outlook"],
  },

  plugins: {
    blog: true,

    components: {
      components: [
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        // "Replit",
        // "StackBlitz",
        "VideoPlayer",
        "YouTube",
      ],
    },

    comment: {
      // // @ts-expect-error: You should generate and use your own comment service
      provider: "Giscus",
      repo: "HuiwenZheng-Ariel/HuiwenZheng-Ariel.github.io",
      repoId: "R_kgDOJTeE0A",
      category: "Announcements",
      categoryId: "DIC_kwDOJTeE0M4CVlk2",
      // lightTheme: "light_high_contrast",
      lightTheme: "transparent_dark",
      darkTheme: "transparent_dark",
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

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
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
      vPre: true,
      vuePlayground: true,
    },

    // prismjs: {
    //   light: "one-dark",
    //   dark: "one-dark",
    // },
    // Disable prism to use shiki
    prismjs: false,
  },

  sidebarSorter: ["readme", "order", "date", "title", "filename"],

  // themeColor: {
  //   blue: "#2196f3",
  //   red: "#f26d6d",
  //   green: "#3eaf7c",
  //   orange: "#fb9b5f",
  // },
});
