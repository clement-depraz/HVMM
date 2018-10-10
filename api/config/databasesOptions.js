'use strict';

module.exports = {
    mysql: {
        host: 'mysql',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'crime_reports_users'
    },
    mongodb: {
        url: 'mongodb://admin:admin@mongodb:27017/admin',
        options: {
            useNewUrlParser: true,
            dbName: 'crime_reports'
        }
    }
};
