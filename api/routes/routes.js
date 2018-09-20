'use strict';

const RequireDirectory = require('require-directory');

const controller = RequireDirectory(module, '../controllers');

// When adding a route
// Check authentication, validation, logging, swagger, unit tests, caching
module.exports = [{
    method: 'GET',
    path: '/ping',
    config: controller.root.index
// },{
//     method: 'GET',
//     path: '/ping',
//     config: controller.root.index
}];
