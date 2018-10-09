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
                email: Joi.string().email().required().example(`email@email.com`),
                password: Joi.string().min(2).max(200).required().example(`password`)
            }
        },
        tags: ['api', 'auth']
    }
}, {
    method: 'POST',
    path: '/signin',
    handler: controller.user.signin,
    options: {
        auth: false,
        validate: {
            payload: {
                first_name: Joi.string().required().example(`admin`),
                last_name: Joi.string().required().example(`admin`),
                email: Joi.string().email().required().example(`admin@admin.com`),
                password: Joi.string().min(2).max(200).required().example(`admin`),
                rank: Joi.number().min(1).required().example(1)
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
            scope: 'chef'
        },
        auth: false,
        tags: ['api', 'user']
    }
}, {
    method: 'PUT',
    path: '/user/{userId}/status/{isValidated}',
    handler: controller.user.updatePendingUser,
    options: {
        auth: {
            scope: 'chef'
        },
        auth: false,
        validate: {
            params: {
                userId: Joi.number().integer().positive(),
                isValidated: Joi.boolean().truthy(1, 'valid', true, '1').falsy(0, 'invalid', false, '0')
            }
        },
        tags: ['api', 'user']
    }
}, {
    method: 'GET',
    path: '/user/export',
    handler: controller.user.exportToCSV,
    options: {
        // auth: {
        //     scope: 'chef'
        // },
        auth: false,
        tags: ['api', 'user']
    }
}, {
    method: 'GET',
    path: '/crime/charts',
    handler: controller.crime.getChartData,
    options: {
        auth: {
            scope: 'agent'
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'GET',
    path: '/crime/{crimeId}/detail',
    handler: controller.crime.getCrimeDetails,
    options: {
        auth: {
            scope: 'agent'
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'PUT',
    path: '/crime/{crimeId}',
    handler: controller.crime.addCrime,
    options: {
        auth: {
            scope: 'detective'
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'DELETE',
    path: '/crime',
    handler: controller.crime.deleteCrime,
    options: {
        auth: {
            scope: 'chef'
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'POST',
    path: '/crime/search',
    handler: controller.crime.searchCrimes,
    options: {
        auth: {
            scope: 'agent'
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
