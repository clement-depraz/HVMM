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
        url: 'mongodb://localhost:27017/crime_reports',
        options: {
            useNewUrlParser: true
        }
    }
};
