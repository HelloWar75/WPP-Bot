const fs = require('fs');
const path = require('path');

const commands_path = path.join(__dirname, 'commands');
const command_files = fs.readdirSync(commands_path).filter(file => file.endsWith('.js'));

let registred_commands = {};

for ( const file of command_files ) {
    const command = require(path.join(commands_path, file));

    registred_commands[command.name] = command;
}

const msg = "!ping 1 + - 5";

if( msg.startsWith('!') ) {
    let command_name = msg.substr(msg.indexOf('!')+1, msg.indexOf(' ')-1);
    let command_args = msg.substr(msg.indexOf(' ')+1, msg.length-1).split(' ');

    if( command_name in registred_commands ) {
        // Executar ações
    }else{
        // Devolver erro ao cliente
    }
}