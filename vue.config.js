module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.sqlitejs3.app",
        // app.exe name
        "productName": "SqliteJs3", 
        "copyright": "Copyright © 2020",
        "directories": {
          "output": "./dist_electron"
        },
        // options placed here will be merged with default configuration and passed to electron-builder
        "files": [
          "**/*",
        ],
        "extraFiles": [
          {
            "from": "TXThrift",
            "to": "./resources/TXThrift",
            "filter": ["**/*"]
          }
        ],
        "nsis": {
          "oneClick": false,
          "perMachine": true,
          "guid": "7e51495b-3f4d-5235-aadd-5636863064f1",
          "allowElevation": true,
          "allowToChangeInstallationDirectory": true,
          //installer ico
          "installerIcon": "./public/nsis/installer.ico",
          //uninstaller ico
          "uninstallerIcon": "./public/nsis/uninstaller.ico",
          "installerHeaderIcon": "./public/nsis/installer.ico",
          "createDesktopShortcut": true,
          "createStartMenuShortcut": true,
          //shortcut name
          "shortcutName": "SqliteJSp",
          "license": "./public/nsis/LICENSE",
        },
        "win": {
          // app ico
          "icon": "./public/app.ico",
          "target": [
            {
              "target": "nsis",
              "arch": [
                "x64",
                "ia32"
              ]
            }
          ]
        },
        "asar": false
      },
      // List native deps here if they don't work
      externals: ['sqlite3'],
      nodeIntegration: true,
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ['./node_modules']
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}