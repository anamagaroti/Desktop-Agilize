const { app, BrowserWindow } = require('electron');
const path = require('path');

// Lide com a criação/remoção de atalhos no Windows ao instalar/desinstalar.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  //Crie a janela do navegador.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // e carregue o index.html do aplicativo.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Abra o DevTools.
  mainWindow.webContents.openDevTools();
};

// Este método será chamado quando o Electron terminar a
// inicialização e está pronto para criar janelas do navegador.
// Algumas APIs só podem ser usadas após a ocorrência desse evento.
app.on('ready', createWindow);

// Saia quando todas as janelas estiverem fechadas, exceto no macOS. Lá é comum
// para aplicativos e sua barra de menus permanecerem ativos até que o usuário saia
// explicitamente com Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // No OS X é comum recriar uma janela no aplicativo quando o
// o ícone do dock é clicado e não há outras janelas abertas.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Neste arquivo você pode incluir o restante do processo principal específico do seu aplicativo
// código. Você também pode colocá-los em arquivos separados e importá-los aqui.
