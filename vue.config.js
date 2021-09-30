module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/lostark": {
        target: "https://lostark.game.onstove.com",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
