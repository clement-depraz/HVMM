'use strict';

const Pack = require('../package');

// root (home) controller
module.exports = {
    index: {
        handler: (request, h) => {
            return {
                version: Pack.version
            };
        },
        tags: ['api']
    }
};
