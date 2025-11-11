import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: true, // 是否开启博客首页
  vpHome: false, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "MaShu", link: "https://github.com/superboyzh" },
  backTop: {
    enabled: true, // 是否启用返回顶部按钮
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: (TkMessage) => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  // 滚动到评论区配置
  toComment: {
    enabled: false, // 是否启动滚动到评论区功能
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
      suffix: "MaShu. All rights reserved.",
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "赣ICP备2021009994号",
      link: "http://beian.miit.gov.cn/",
    },
  },
  themeEnhance: {
    enabled: true, // 启用主题增强功能
    position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
    // 布局切换配置
    layoutSwitch: {
      disabled: false, // 禁用布局切换
      defaultMode: "original", // 布局切换的默认模式
      disableHelp: false, // 禁用帮助提示
      disableAnimation: false, // 禁用布局切换动画
      defaultDocMaxWidth: 90, // 内容布局最大宽度的默认百分比，仅限 0-100
      disableDocMaxWidthHelp: false, // 禁用帮助提示
      defaultPageMaxWidth: 95, // 页面布局最大宽度的默认百分比，仅限 0-100
      disablePageMaxWidthHelp: false, // 禁用帮助提示
    },
    // 布局主题色配置
    themeColor: {
      disabled: false, // 禁用布局主题色切换
      defaultColorName: "vp-default", // 布局默认主题色
      defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
      disableHelp: false, // 禁用帮助提示
      disabledInMobile: false, // 是否在移动端禁用
    },
    // 聚光灯配置
    spotlight: {
      disabled: false, // 禁用聚光灯
      defaultStyle: "aside", //  聚光灯默认样式
      disableHelp: false, // 禁用帮助提示
      defaultValue: true, // 聚光灯默认开关状态
    },
  },
  // 公告配置
  notice: {
    enabled: true, // 是否启用公告功能
    title: "公告", // 公告标题，支持函数式：需要和国际化搭配使用，根据不同语言环境返回不同标题
    initOpen: true,
    duration: 0, // 弹框定时自动关闭，0 不自动消失
    mobileMinify: false, // 移动端自动最小化
    reopen: true,
    useStorage: true, // 是是否使用 localStorage 存储公告状态，如：当打开公告弹框后，下次进来则自动打开弹框
    twinkle: false, // 公告图标是否打开闪烁提示
    position: "top", // 公告弹框出现位置
    // ...
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
  banner: {
    enabled: true, // 是否启用 Banner
    name: "MaShu Blog", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
    ], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    features: [{ title: "", details: "", link: "", image: "" }], // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    featureCarousel: 4000, // feature 轮播间隔时间，单位：毫秒。仅在移动端生效（屏幕小于 719px）
  },
  blogger: {
    name: "MaShu", // 博主昵称
    slogan: "世上无难事，只要肯放弃！", // 博主签名
    shape: "circle-rotate-last", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    avatar: "/logo/avatar.jpeg", // 博主头像
    circleBgImg: "/blog/bg4.webp", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#ffffff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "😪", // 状态图标
      size: 24, // 图标大小
      title: "困", // 鼠标悬停图标的提示语
    },
  },
  codeBlock: {
    enabled: true, // 是否启用新版代码块
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
    sidebar: true, // 是否启用 sidebar 插件
    permalink: true, // 是否启用 permalink 插件
    permalinkOption: {}, // permalinks 插件配置项
    mdH1: true, // 是否启用 mdH1 插件
    catalogueOption: {}, // catalogues 插件配置项
    docAnalysis: true, // 是否启用 docAnalysis 插件
    docAnalysisOption: {}, // docAnalysis 插件配置项
    fileContentLoaderIgnore: [], // fileContentLoader 插件扫描 markdown 文档时，指定忽略路径，格式为 glob 表达式，如 **/test/**
    autoFrontmatter: true, // 是否启用 autoFrontmatter 插件
    autoFrontmatterOption: {
      categories: true,
      permalink: false,
    },
    sidebarOption: {
      initItems: false,
    },
  },
  // 文章配置
  post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "top", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "default", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
});
