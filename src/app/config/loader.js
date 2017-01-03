
// Server Loader
// Init the boot process and get a server instance back
const server = require('./express');

// Set the default environment to be `development`
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function makeStellarWind() {
    return server();
}

module.exports = makeStellarWind;