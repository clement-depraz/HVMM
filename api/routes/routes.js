'use strict';

const Joi = require('joi');

const RequireDirectory = require('require-directory');

const controller = RequireDirectory(module, '../controllers');

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
    path: '/user/export.csv',
    handler: controller.user.exportToCSV,
    options: {
        auth: {
            scope: 'chef'
        },
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
        auth: false,
        tags: ['api', 'crime']
    }
}, {
    method: 'POST',
    path: '/crime',
    handler: controller.crime.addCrime,
    options: {
        auth: {
            scope: 'detective'
        },
        auth: false,
        validate: {
            payload: {
                compnos: Joi.number().integer().required().example(152038705),
                naturecode: Joi.string().example('SSA'),
                incident_type_description: Joi.string().example('BONJOUR'),
                main_crimecode: Joi.string().example('BONJOUR'),
                reptdistrict: Joi.string().example('C11'),
                reportingarea: Joi.number().integer().example(0),
                fromdate: Joi.date().example('2015-05-12T00:10:00.000+0000'),
                weapontype: Joi.string().example('Other'),
                shooting: Joi.boolean().truthy(1, true).falsy(0, false).example(false),
                domestic: Joi.boolean().truthy(1, true).falsy(0, false).example(false),
                shift: Joi.string().example('Last'),
                year: Joi.number().integer().example(2015),
                month: Joi.number().integer().example(5),
                day_week: Joi.string().example('Tuesday'),
                ucrpart: Joi.string().example('Part Two'),
                x: Joi.number().example('771681.0593'),
                y: Joi.number().example('2935070.74'),
                streetname: Joi.string().example('ROSSETER ST'),
                xstreetname: Joi.string().example('BULLARD ST'),
                location: Joi.string().example('(42.30119026, -71.07299707)')
            }
        },
        tags: ['api', 'crime']
    }
}, {
    method: 'DELETE',
    path: '/crime/{crimeId}',
    handler: controller.crime.deleteCrime,
    options: {
        auth: {
            scope: 'chef'
        },
        auth: false,
        validate: {
            params: {
                crimeId: Joi.number().integer().positive()
            }
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
        auth: false,
        validate: {
            payload: {
                compnos: Joi.number().integer(),
                incident_type_description: Joi.string(),
                reptdistrict: Joi.string(),
                weapontype: Joi.string(),
                domestic: Joi.boolean().truthy(1, true).falsy(0, false),
                shooting: Joi.boolean().truthy(1, true).falsy(0, false),
                fromdate: Joi.string(),
                page: Joi.number().integer().required().positive().example(1)
            }
        },
        tags: ['api', 'crime']
    }
}];
