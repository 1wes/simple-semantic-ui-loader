const {ipcMain,app,BrowserWindow}=require('electron');

let win;

function createMainWindow(){

    win=new BrowserWindow({

        width:800,

        height:600,

        frame:false,

        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile('main.html');
}

app.whenReady().then(createMainWindow);