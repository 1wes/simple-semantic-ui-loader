const {ipcMain,app,BrowserWindow,Menu}=require('electron');

let win;

// remove/disable application menu
Menu.setApplicationMenu(false);

function createMainWindow(){

    win=new BrowserWindow({

        width:800,

        height:400,

        // frame:false,

        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile('main.html');
}

app.whenReady().then(createMainWindow);