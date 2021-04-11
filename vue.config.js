module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: (config) => {
        console.log('process.env.NODE_ENV', process.env.NODE_ENV)
        config.module
          .rule("node")
          .test(/\.node$/)
          .use(process.env.NODE_ENV === 'production' ? 'node-loader-ext' : 'node-loader')
          .loader(process.env.NODE_ENV === 'production' ? 'node-loader-ext' : 'node-loader')
          .end();
      },
      builderOptions: {
        "productName": "Electron 测试版",
        "appId": "electron.axetroy.com",
        "mac": {
          "target": [
            {
              "target": "dmg"
            }
          ],
          "icon": "static/custom/icon.ico",
          "extraResources": [
            {
              "from": "src/vendor",
              "to": "./static/lib"
            }
          ]
        },
      }
    },
  },
};
