const fs = require('fs');
const path = require('path');

class CommandListener {

    projectPath = path.dirname(require.main.filename);
    commandsFolder = path.join(this.projectPath, 'commands');
    allCommandFiles = fs.readdirSync(this.commandsFolder).filter(file => file.endsWith('.js'));

    static registredCommands = {};

    constructor() {

        for( const file of this.allCommandFiles ) {
            const command = require(path.join(this.commandsFolder, file));
            console.log("Carregando comando " + command.name);
            CommandListener.registredCommands[command.name] = command
        }

    }

    listen(...args) {
        let msg = args[0];

        let command_name = msg.body.substr(msg.body.indexOf('!')+1, msg.body.indexOf(' ')-1);
        let command_args = msg.body.substr(msg.body.indexOf(' ')+1, msg.body.length-1).split(' ');

        if (command_name in CommandListener.registredCommands) {
            CommandListener.registredCommands[command_name].execute(msg, command_args);
        }

    }

}

module.exports = CommandListener;