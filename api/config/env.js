'use strict';

module.exports = {
    api: {
        port: 8080,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        }
    },
    microservices: {
        edit_user: 'http://edit_user:8081'
    }
};
