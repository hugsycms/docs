module.exports = {
  base: "/docs/",
  title: "HugsyCMS",
  description:
    "An out-of-box UI solution for enterprise applications as a React boilerplate.",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/start/" },
      { text: "指南", link: "/guides/introduction/about" },
      { text: "Github", link: "https://github.com/hugsycms/hugsycms" },
    ],
    sidebarDepth: 0,
    sidebar: {
      "/guides/": [
        {
          title: "快速上手",
          collapsable: false,
          children: [
            "/guides/introduction/about",
            "/guides/introduction/start",
            "/guides/introduction/contribution",
            "/guides/introduction/FAQ",
          ],
        },
      ],
    },
    lastUpdated: "最后一次更新",
  },
};
