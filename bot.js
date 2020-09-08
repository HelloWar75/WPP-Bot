const path = require('path');
const Core = require('./Core.js');

global.base_credentials_path = path.join(__dirname, 'credentials');

let core = new Core();

core.initialize();
