module.exports = function createWindow(url, BrowserWindow) {
        win = new BrowserWindow({ width: 800, height: 600, frame: false, fullscreen: true, show: false });
        win.on('close', function () { win = null });
        win.loadURL(url);
        win.once('ready-to-show', () => {
            //win.show()
        });
        return win;
}