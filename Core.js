const load_credential = require('./helpers/load_credential');
const { Client } = require('whatsapp-web.js');
const CommandListener = require('./listeners/CommandListener.js');


class Core extends Client {

    static commandListener;

    constructor(client_options = null) {
        let options = {};

        if (client_options == null) {
            let credentials = load_credential();
            options = {
                puppeteer: {
                    headless: true
                },
                session: credentials
            };
        }else{
            options = {}
        }

        Core.commandListener = new CommandListener();

        super(options);
    }

    async initialize() {

        this.addListener('message', Core.commandListener.listen);

        this.addListener('ready', () => {
            console.log('Cliente Pronto!');
        })

        return super.initialize();
    }

}

module.exports = Core;