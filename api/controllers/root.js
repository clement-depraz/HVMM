'use strict';

const Pack = require('../package');

// root (home) controller
module.exports = {
    index: {
        handler: (request, h) => ({
            version: Pack.version
        }),
        tags: ['api']
    }
};
