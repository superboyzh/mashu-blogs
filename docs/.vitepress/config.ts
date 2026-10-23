import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";

const description = "MaShu 的技术博客，记录前端开发、Java、Python、数据库与服务器部署的学习笔记和实践。";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "MaShu Blog",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "MaShu 的博客 | MaShu Blog" }],
    ["meta", { property: "og:site_name", content: "MaShu 的博客" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "author", content: "MaShu" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", content: "MaShu,技术博客,前端,Java,Python,Redis,Nginx,Docker" }],
    // MathJax 配置脚本
    [
      "script",
      { type: "text/javascript" },
      `
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
          processEscapes: true
        }
      };
      `,
    ],
    // 加载 MathJax 库
    [
      "script",
      {
        id: "MathJax-script",
        src: "https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js",
      },
    ],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://www.idoit.icu", // ** 换成你的域名
    transformItems: (items) => {
      // 插件映射的键为不含扩展名的源路径，sitemap 则使用 .html 路径。
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
        .permalinks;
      return items.map((item) => {
        const sourcePath = decodeURI(item.url).replace(/^\//, "").replace(/\.html$/, "");
        const permalink = permalinks?.map[sourcePath];
        return permalink ? { ...item, url: permalink.replace(/^\//, "") } : item;
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/teek-logo-mini.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        link: "/frontend/virtual-list",
        activeMatch: "/02.文档/",
      },
      { text: "分类", link: "/categories" },
      { text: "关于", link: "/about" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/superhao1126",
      },
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "AOSJZ9XMJU",
        apiKey: "5af8f7b7b6c0455166aff7c639b0d82b",
        indexName: "mashu",
      },
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern:
        "https://github.com/superhao1126/mashu-blogs/edit/main/docs/:path",
    },
  },
  vite: {
    // 该插件的开发中间件会重复调用 next，保留构建产物生成即可。
    plugins: llmstxt().map((plugin) => ({ ...plugin, apply: "build" as const })),
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
