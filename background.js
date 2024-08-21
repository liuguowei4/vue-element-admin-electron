const { app, BrowserWindow, screen, ipcMain, nativeTheme } = require('electron')
const path = require('path')

// 热加载
try {
  require('electron-reloader')(module,{});
} catch (_) {}

const createWindow = () => {
  const win = new BrowserWindow({
    width: screen.getPrimaryDisplay().workAreaSize.width, // 直接显示最宽窗口，非最大化
    height: screen.getPrimaryDisplay().workAreaSize.height, // 直接显示最高窗口，非最大化
  })
  // 判断当前环境
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools() // 自动打开工作台
    win.loadURL('http://localhost:9527') // 加载本地服务地址
  } else {
    win.loadFile('./dist/index.html') // 加载打包后的静态页面
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})