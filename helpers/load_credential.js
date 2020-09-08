const fs = require('fs');
const path = require('path');

module.exports = (credential_name = "credential_01.json", path_credentials = '') => {

    if (path_credentials.length < 1) {
        path_credentials = global.base_credentials_path;
    }

    let credential_file = path.join(path_credentials, credential_name);

    if (fs.existsSync(credential_file)) {
        return require(credential_file);
    }

};