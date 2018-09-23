'use strict';

const Boom = require('boom');

const UserModel = require('../model/user');

module.exports = {
    login: async (request, h) => {
        const user = await UserModel.getValidatedUser(request.payload.email, request.payload.password);
        if (user) {
            request.cookieAuth.set(user);
            return 'Login Successful!';
        } else {
            return Boom.unauthorized('Bad email or password');
        }
    },
    signin: (request, h) => {
        // TODO
        return 'OK';
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
        return await UserModel.exportToCSV();
    }
};
