'use strict';

const Pack = require('../package');

// root (home) controller
module.exports = {
    index: (request, h) => ({
        version: Pack.version
    })
};
