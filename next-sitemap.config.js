/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://remagic.brclover.com",
  generateRobotsTxt: false,
  outDir: "out",
  exclude: ["/sitemap.xml", "/systems/item/*", "/robots.txt"],

  transform: async (config, path) => {
    return {
      loc: path,
      priority: path === "/" ? 1.0 : 0.7,
    };
  },
};
