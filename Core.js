const load_credential = require('./helpers/load_credential');
const LoadCredential = require('./helpers/load_credential.js');
const { Client } = require('whatsapp-web.js');

class Core {

    client = null;
    credentials = null;

    constructor(client_options = null) {
        // Carregar credencias
        this.credentials = LoadCredential();
        if (client_options == null) {
            this.client = new Client({
                puppeteer: {
                    headless: true
                },
                session: this.credentials
            });
        } else {
            this.client = new Client(client_options);
        }
    }

    start() {
        this.client.initialize();
    }

}

module.exports = Core;