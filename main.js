const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

// Hot reload in development
try {
    require('electron-reload')(__dirname, {
        electron: require(`${__dirname}/../node_modules/electron`)
    });
} catch (_) { /* ignore if not installed */ }

function createWindow() {
    const iconPath = path.join(__dirname, 'icons', 'icon.png');

    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1200,
        minHeight: 700,
        backgroundColor: '#111113',
        icon: iconPath,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        show: false
    });

    Menu.setApplicationMenu(null);
    mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Auto-reload on file changes (development)
    mainWindow.webContents.on('did-finish-load', () => {
        console.log('Page loaded');
    });
}

// IPC handlers for window controls
ipcMain.handle('minimize-window', () => mainWindow.minimize());
ipcMain.handle('maximize-window', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
});
ipcMain.handle('close-window', () => mainWindow.close());

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
