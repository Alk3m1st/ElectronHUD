const electron = require('electron');
const ipc = electron.ipcRenderer;
const BrowserWindow = electron.remote.BrowserWindow;
let win;

document
    .getElementById('StartHUD')
    .addEventListener('click', _ => {
        ipc.send('launch-hud');
        win = new BrowserWindow({ width: 800, height: 600 });
        win.on('close', function () { win = null });
        win.loadURL("http://www.bing.com"); // Add an initialising page
        win.show();
    });

ipc.on('launchSite', (event, site) => {
        console.log(site);
        document.getElementById('currentSite').innerHTML = site.name;

        console.log(site.name);
        console.log(site.url);
        
        win.loadURL(site.url);
    });