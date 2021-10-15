module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8081",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
      },
      "^/lostark": {
        target: "https://lostark.game.onstove.com",
        changeOrigin: true,
        pathRewrite: { "^/lostark": "" },
        secure: false,
        logLevel: "debug",
      },
    },
  },
};
