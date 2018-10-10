'use strict';

const Boom = require('boom');

const UserModel = require('../model/user');

module.exports = {
    login: async (request, h) => {
        const user = await UserModel.getValidatedUser(request.payload.email, request.payload.password);
        if (user) {
            request.cookieAuth.set(user);
            return user;
        } else {
            return Boom.badRequest('Bad email or password');
        }
    },
    signin: async (request, h) => {
        return await UserModel.signin(request);
    },
    logout: (request, h) => {
        request.cookieAuth.clear();
        return 'OK';
    },
    getPendingUsers: async (request, h) => {
        return await UserModel.getPendingUsers();
    },
    updatePendingUser: async (request, h) => {
        return await UserModel.updatePendingUser(request.params.userId, request.params.isValidated);
    },
    exportToCSV: async (request, h) => {
        const result = await UserModel.exportToCSV();
        if (typeof result === 'string') {
            const response = h.response(result)
                .type('text/csv');
                // .header('Content-length', result.length);
                // .header('Content-type', 'application/pdf')
            // response.header('Content-Type', 'application/octet-stream');
            // response.header('Content-Disposition', 'attachment; crime_report_export_user.csv');
            // return response;
            return response;
        } else {
            return result;
        }
    }
};
