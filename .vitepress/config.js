module.exports = {
  lang: "en-US",
  title: "WIMS Guide",
  base: process.env.NODE_ENV === "production" ? "/wims-guide/" : "/",
  description:
    "Documentation of Warehouse Inventory Management Solution (WIMS)",

  markdown: {
    lineNumbers: true,
    // config: (md) => {
    // // use more markdown-it plugins!
    // md.use(require('markdown-it-xxx'))
    // },
  },
  themeConfig: {
    repo: "Tecdiary/wims-guide",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    // algolia: {
    //   appId: "46NDRTKH7W",
    //   apiKey: "b7d92384bfa2844452a9d2af4ed69df8",
    //   indexName: "wims_GUIDE",
    // },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Buy",
        link:
          "https://tecdiary.net/products/warehouse-inventory-management-solution-wims",
      },
      {
        text: "Support",
        link:
          "https://tecdiary.net/support/warehouse-inventory-management-solution-wims",
      },
      {
        text: "Change Log",
        link:
          "https://tecdiary.net/changelogs/warehouse-inventory-management-solution-wims",
      },
    ],
    sidebar: {
      "/": getSidebar(),
    },
  },
};

function getSidebar() {
  return [
    {
      text: "Installation",
      children: [
        { text: "Installation Guide", link: "/install/" },
        { text: "Installation Service", link: "/install/service" },
      ],
    },
    {
      text: "Update",
      children: [{ text: "Update Guide", link: "/update/" }],
    },
    {
      text: "FAQs",
      children: [{ text: "Frequently Asked Questions", link: "/faqs/" }],
    },
    {
      text: "User Guide",
      children: [
        { text: "General Guide", link: "/guide/" },
        { text: "Items, Categories & Units", link: "/guide/items" },
        { text: "Inventory Movement", link: "/guide/orders" },
        { text: "Warehouses, Users & Settings", link: "/guide/users" },
        { text: "Alerts, Activity & Reports", link: "/guide/reports" },
      ],
    },
  ];
}
