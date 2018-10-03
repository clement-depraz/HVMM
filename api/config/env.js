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
        edit_user: 'http://172.16.24.245:81'
    }
};
