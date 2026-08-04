/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://remagic.brclover.com",
  generateRobotsTxt: false,
  generateLastmod: false,
  outDir: "out",
  exclude: ["/sitemap.xml", "/systems/item/*"],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
