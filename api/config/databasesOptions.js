'use strict';

module.exports = {
    mysql: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'crime_reports_users'
    },
    mongodb: {
        url: 'mongodb://admin:admin@localhost:27017/admin',
        options: {
            useNewUrlParser: true,
            dbName: 'crime_reports'
        }
    }
};
