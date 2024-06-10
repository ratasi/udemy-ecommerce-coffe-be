module.exports = {
  "strapi-neon-tech-db-branches": {
    enabled: true,
    config: {
      neonApiKey:
        "hd207377znlrgrtxa200cvmo3sl6sa7tqggllkgr3bu4lv83h423kuyunpr7lvmh", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "ecommerce", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main", // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    },
  },
};
