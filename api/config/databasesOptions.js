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
        url: 'mongodb://mongodb:27017/crime_reports',
        options: {
            useNewUrlParser: true
        }
    }
};
