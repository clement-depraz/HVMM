'use strict';

const Joi = require('joi');

const RequireDirectory = require('require-directory');

const controller = RequireDirectory(module, '../controllers');

// When adding a route
// Check scope, validation, tags, boom, unit tests, caching?
module.exports = [{
    method: 'GET',
    path: '/ping',
    handler: controller.root.index,
    options: {
        auth: false,
        tags: ['api']
    }
},{
    method: 'POST',
    path: '/login',
    handler: controller.user.login,
    options: {
        auth: false,
        validate: {
            payload: {
                // email: Joi.string().email().required().example(`email@email.com`),
                email: Joi.string().required().example(`admin`),
                password: Joi.string().min(2).max(200).required().example(`admin`)
            }
        },
        tags: ['api', 'auth']
    }
}, {
    method: 'GET',
    path: '/logout',
    handler: controller.user.logout,
    options: {
        auth: false,
        tags: ['api', 'auth']
    }
}, {
    method: 'GET',
    path: '/user/pending',
    handler: controller.user.getPendingUsers,
    options: {
        auth: {
            scope: 'admin'
        },
        tags: ['api', 'user']
    }
}, {
    method: 'PUT',
    path: '/user/{userId}/status/{isValidated}',
    handler: controller.user.updatePendingUser,
    options: {
        auth: {
            scope: 'admin'
        },
        validate: {
            params: {
                userId: Joi.number().integer().positive(),
                isValidated: Joi.boolean().truthy(1, 'valid').falsy(0, 'invalid')
            }
        },
        tags: ['api', 'user']
    }
}, {
    method: 'GET',
    path: '/user/export',
    handler: controller.user.exportToCSV,
    options: {
        auth: {
            scope: 'admin'
        },
        tags: ['api', 'user']
    }
}, {
    method: 'POST',
    path: '/signin',
    handler: controller.user.signin,
    options: {
        auth: false,
        tags: ['api', 'auth']
    }
}, {
    method: 'GET',
    path: '/crime/charts',
    handler: controller.crime.getChartData,
    options: {
        auth: {
            scope: 'user'
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'PUT',
    path: '/crime',
    handler: controller.crime.addCrime,
    options: {
        auth: {
            scope: 'user'
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'POST',
    path: '/crime/search',
    handler: controller.crime.searchCrimes,
    options: {
        auth: {
            scope: 'user'
        },
        validate: {
            payload: {
                place: Joi.string(),
                date: Joi.string()
            }
        },
        tags: ['api', 'crime']
    }
}];
