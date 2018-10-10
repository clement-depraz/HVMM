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
        const csvFile = await UserModel.exportToCSV();
        const response = h.response(csvFile);
        response.header('Content-Type', 'application/octet-stream');
        //il manque le nom du ficher
        response.header('Content-Disposition', 'attachment; crime_report_export_user.csv');
        return response;
    }
};
