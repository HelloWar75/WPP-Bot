module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        console.log(message, args);
    },
};