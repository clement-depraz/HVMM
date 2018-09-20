'use strict';

const Mysql = require('mysql');
const RequireDir = require('require-directory');

const Config = RequireDir(module, './config');
let db;

const connectMySQLDatabase = () => {
    if (!db) {
        db = Mysql.createConnection(Config.databasesOptions.mysql);
        db.connect((err) => {
            if (err) {
                throw err;
            }
        });
    }

    return db;
};

module.exports = connectMySQLDatabase();
