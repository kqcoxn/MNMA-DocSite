import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/mnma/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/mnma/logo.png" }]],
  title: "MNMA文档站",
  description: "MNMA使用手册",

  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/users/start.md" },
    ],

    sidebar: [
      {
        text: "用户手册",
        items: [
          { text: "新手上路", link: "/docs/users/start.md" },
          { text: "下载与安装", link: "/docs/users/install.md" },
          { text: "第一次启动", link: "/docs/users/init.md" },
          { text: "功能说明", link: "/docs/users/funcs.md" },
          { text: "问题排查", link: "/docs/users/errors.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kqcoxn/MaaNewMoonAccompanying",
      },
    ],
  },
});
