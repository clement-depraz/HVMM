'use strict';

const Pack = require('../package');
const Env = require('./env');

module.exports = {
    host: Env.host + ':' + Env.port,
    info: {
        title: 'HVMM Api Documentation',
        version: Pack.version
    },
    lang: 'fr',
    grouping: 'tags'
};
