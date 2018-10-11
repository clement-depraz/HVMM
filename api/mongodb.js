'use strict';

const Mongoose = require('mongoose');
const RequireDir = require('require-directory');

const Config = RequireDir(module, './config');
let db;

const connectMongoDBDatabase = () => {
    if (!db) {
        const config = Config.databasesOptions.mongodb;
        Mongoose.connect(config.url, config.options);
        db = Mongoose.connection;
        db.on('error', (err) => {
            throw err;
        });
    }

    return db;
};

module.exports = connectMongoDBDatabase();
