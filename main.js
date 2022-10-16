const {app, BrowserWindow, ipcMain, nativeTheme} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({
		width: 900, 
		height: 6700,
		webPreferences: {
			preload: path.join(__dirname,'preload.js')
		}	
	})    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/budget-tracker/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   


	ipcMain.handle('dark-mode:toggle', () => {
		if (nativeTheme.shouldUseDarkColors) {
		  nativeTheme.themeSource = 'light'
		} else {
		  nativeTheme.themeSource = 'dark'
		}
		return nativeTheme.shouldUseDarkColors
	  })
	
	  ipcMain.handle('dark-mode:system', () => {
		nativeTheme.themeSource = 'system'
	  })
} 

app.whenReady().then(() => {
	createWindow()
  
	app.on('activate', () => {
	  if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	  }
	})
})
  
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('ready', onReady);