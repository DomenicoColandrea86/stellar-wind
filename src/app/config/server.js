'use strict';

const chalk = require('chalk');
const Promise = require('bluebird');

/**
 * Stellar Wind Class
 * Handles the creation of an HTTP Server for Stellar Wind
 */
class StellarWindServer {
    
    constructor(rootApp) {
        this.rootApp = rootApp;
        this.httpServer = null;
        this.isProduction = process.env.NODE_ENV === 'production';
		this.port = this.isProduction ? 8080 : 3000;
    }

	/**
	 * Public API methods
	 *
	 * # Start
	 * Starts the StellarWindServer listening on the configured port.
	 * Alternatively you can pass in your own express instance and let StellarWindServer
	 * start listening for you.
	 * @param  {Object} externalApp - Optional express app instance.
	 * @return {Promise} Resolves once StellarWindServer has started
	 */
    start(externalApp) {
		let self = this;
		let rootApp = externalApp ? externalApp : self.rootApp;

		return new Promise((resolve) => {
		
			// Listen on provided port
			self.httpServer = rootApp.listen(this.port, () => {
				console.log(chalk.green('Stellar Wind Server started on port', this.port));
			});

			self.httpServer.on('error', (error) => {
				// log error
				logger.error(new Error(error), error.message);

				// handle specific listen errors with friendly messages
				if (error.errno === 'EADDRINUSE') {
					console.error(
						'(EADDRINUSE) Cannot start Stellar Wind.',
						'Port ' + this.port + ' is already in use by another program.'
					);
				} else {
					console.error(
						'(Code: ' + error.errno + ')',
						'There was an error starting your server.',
						'Please use the error code above to search for a solution.'
					);
				}

				process.exit(-1);
			});

			self.httpServer.on('listening', () => {
				self.addListeners();
				resolve(self);
			});
		});
    }

    /**
	 * # Stop
	 * Returns a promise that will be fulfilled when the server stops. If the server has not been started,
	 * the promise will be fulfilled immediately
	 * @returns {Promise} Resolves once StellarWindServer has stopped
	 */
    stop() {
		let self = this;
		return new Promise((resolve, reject) => {
			if (self.httpServer === null) {
				resolve(self);
			} else {
				self.httpServer.close(() => {
					self.httpServer = null;
					self.logShutdownMessages();
					resolve(self);
				});
			}
		});
	}

	/**
	 * # Restart
	 * Restarts the StellarWindServer application
	 * @returns {Promise} Resolves once StellarWindServer has restarted
	 */
	restart() {
		return this.stop().then(this.start.bind(this));
	}

	// Log Start Messages
	addListeners() {

		function shutdown() {
			console.log(chalk.red('\n Stellar Wind Server has shut down'));
			console.log(
				'\n Stellar Wind was running for',
				Math.round(process.uptime()),
				'seconds'
			);
			process.exit(0);
		}

		// ensure service exits correctly on Ctrl+C and SIGTERM
		process
			.removeAllListeners('SIGINT').on('SIGINT', shutdown)
			.removeAllListeners('SIGTERM').on('SIGTERM', shutdown);
	}

	// Log Shutdown Messages
	logShutdownMessages() {
		console.log(chalk.red('Stellar Wind is closing connections'));
	}
}  

module.exports = StellarWindServer;
