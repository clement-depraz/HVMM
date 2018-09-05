'use strict';

const Hapi = require('hapi');
const requireDir = require('require-directory');

var Config = requireDir(module, './config');

// Create a new server
// Setup the server with a host and port
const server = Hapi.server({
    host: Config.env.getServer().host,
    port: Config.env.getServer().port
});

// Add the server routes
server.route(Config.routes);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
