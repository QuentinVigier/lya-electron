//Importation des modules
const { app, BrowserWindow } = require('electron');
const path = require('path');

//Création de la fenêtre principale
function createWindow() {
    //Création de la fenêtre
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            openai: path.join(__dirname, 'openai.js'),
        }
    });

    //Chargement de la page HTML
    win.loadFile('index.html');
}

//Lancement de l'application
app.whenReady().then(() => {
    createWindow();
});

//Fermeture de l'application pour Windows et Linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


