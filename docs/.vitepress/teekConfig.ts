import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "Zehan", link: "https://github.com/superboyzh" },
  backTop: {
    enabled: true, // 是否启用返回顶部按钮
    content: "progress", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: (TkMessage) => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  // 滚动到评论区配置
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: (TkMessage) => TkMessage.success("滚动到评论区成功"), // 滚动到评论区后的回调
  },
  footerInfo: {
    theme: {
      show: true, // 是否显示主题版权，建议显示
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2025,
      suffix: "Zehan. All rights reserved.",
    },
  },
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，仅在文章页显示
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
  },
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
    homeLabel: "首页", // 鼠标悬停首页图标的提示文案
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d20a1dd0aacd3f37ebc24d6626a65fef",
      },
    },
    { provider: "google", options: { id: "G-C480B0LRMT" } },
  ],
  social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/superboyzh",
    },
    {
      icon: "simple-icons:gitee",
      name: "Gitee",
      link: "https://gitee.com/ahao02",
    },
  ],
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: true, // 代码块底部是否显示展开/折叠遮罩层
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },

  articleShare: {
    enabled: true, // 是否开启文章链接分享功能
    text: "分享此页面", // 分享按钮文本
    copiedText: "链接已复制", // 复制成功文本
    query: false, // 是否包含查询参数
    hash: false, // 是否包含哈希值
  },

  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
});
