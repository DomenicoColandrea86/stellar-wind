'use strict';

// StellarWind Startup
const StellarWind = require('./config/loader');

// Call StellarWind to get an instance of StellarWindServer
StellarWind()
	.then((StellarWindServer) => {
	    // Let StellarWind handle starting our server instance.
		StellarWindServer.start(StellarWindServer.rootApp);
	})
	.catch((err) => {
	    console.error('There was an error: ', err);
	});
