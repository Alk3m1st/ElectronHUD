const electron = require('electron');
const ipc = electron.ipcRenderer;
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');

document
    .getElementById('StartHUD')
    .addEventListener('click', _ => {
        let stuff = document.getElementById('listOfSites').value;
        console.log(stuff);
        ipc.send('launch-hud');
    });