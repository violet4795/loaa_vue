module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/loaa": {
        target: "https://lostark.game.onstove.com",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
      },
      "/lostark": {
        target: "https://lostark.game.onstove.com",
        changeOrigin: false,
        pathRewrite: { "^/": "" },
        secure: false,
        logLevel: "debug",
      },
    },
  },
};
