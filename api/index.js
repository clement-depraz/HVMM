'use strict';

const Hapi = require('hapi');
const RequireDir = require('require-directory');

const Config = RequireDir(module, './config');
const Routes = RequireDir(module, './routes');
const MySQL = require('./mysql');
const MongoDB = require('./mongodb');

// Create a new server
const server = Hapi.server(Config.env.api);

const init = async () => {

    // Add server plugins
    await server.register([
        require('hapi-auth-cookie'),
        require('inert'),
        require('vision'),
        {
            plugin: require('hapi-swagger'),
            options: Config.swaggerOptions
        },{
            plugin: require('good'),
            options: Config.goodOptions
        }
    ]);

    server.auth.strategy('session', 'cookie', Config.cookieOptions);

    server.auth.default('session');

    // Add server routes
    await server.route(Routes.routes);

    //Test MySQL connection
    await MySQL.query('SELECT 1', () => {
        console.log('Connection to MySQL OK');
    });

    //Test MongoDB connection
    await MongoDB.once('open', () => {
        console.log('Connection to MongoDB OK');
    });

    // Start server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    server.stop();
    console.log('Unexpected error : ', err);
    process.exit(1);
});

init();
