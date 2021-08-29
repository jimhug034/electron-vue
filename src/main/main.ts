import { app, BrowserWindow } from 'electron'
import path from 'path'

const createWindow = async (): Promise<void> => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (process.env.NODE_ENV === 'development') {
    await win.loadURL('http://localhost:3000/')
    win.webContents.openDevTools()
  } else {
    await win.loadFile('dist/render/index.html')
  }
}

await app.whenReady().then(createWindow)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
