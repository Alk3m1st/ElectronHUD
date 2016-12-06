const electron = require('electron');
const ipc = electron.ipcRenderer;
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
let win;

document
    .getElementById('StartHUD')
    .addEventListener('click', _ => {
        ipc.send('launch-hud');
        win = new BrowserWindow({ width: 800, height: 600, frame: false, fullscreen: true, show: false });
        win.on('close', function () { win = null });
        win.loadURL(path.join('file://', __dirname, './loading.html')); // Add an initialising page
        win.once('ready-to-show', () => {
            win.show()
        });
    });

ipc.on('launchSite', (event, site) => {
        document.getElementById('currentSite').innerHTML = site.name;
        
        win.loadURL(site.url);
        //win.hide();
        //win.isVisible();
    });