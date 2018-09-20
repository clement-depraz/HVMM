'use strict';

const Hapi = require('hapi');
const RequireDir = require('require-directory');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const Config = RequireDir(module, './config');
const Routes = RequireDir(module, './routes');
const MySQL = require('./mysql');
const MongoDB = require('./mongodb');

const init = async () => {
    // Create a new server
    const server = Hapi.server(Config.env);

    // Add server plugins
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: Config.swaggerOptions
        },{
            plugin: require('good'),
            options: Config.goodOptions
        }
    ]);

    // Add server routes
    await server.route(Routes.routes);

    //Test MySQL connection
    MySQL.query('SELECT 1', () => {
        console.log('Connection to MySQL OK');
    });

    //Test MongoDB connection
    MongoDB.once('open', () => {
        console.log('Connection to MongoDB OK');
    });

    // Start server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
