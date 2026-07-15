/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://remagic.brclover.com",
  generateRobotsTxt: false,
  outDir: "out",
  exclude: ["/sitemap.xml", "/systems/item/*"], // 除外設定

  // transform関数でpriorityを制御
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
