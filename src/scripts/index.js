/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../style/style.css';
import '../style/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register';
import WebSocketInititator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    WebSocketInititator.init(CONFIG.WEB_SOCKET_SERVER);
});
