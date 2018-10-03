'use strict';

const Axios = require('axios');
const Boom = require('boom');
const RequireDir = require('require-directory');

const Config = RequireDir(module, '../config');
const MySQL = require('../mysql');

module.exports = {
    signin(request) {
        const instance = Axios.create({
            baseURL: Config.env.microservices.edit_user,
            timeout: 4000
        });
        return new Promise((resolve, reject) => {
            instance.post("/app_user", request.payload)
                .then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    if (error.response) {
                        const data = error.response.data;
                        resolve(Boom.badRequest(data[Object.keys(data)[0]]));
                    } else if (error.request) {
                        resolve(Boom.serverUnavailable('Microservice unreachable.'));
                    }
                });
        });
    },
    getValidatedUser(email, password) {
        const sql = 'SELECT u.id, u.first_name, u.last_name, u.email, u.password, r.label as rankLabel, r.id as rank'
        + ' FROM users u INNER JOIN rank r ON r.id = u.rank'
        + ' WHERE u.isCertified = 1 AND u.email = ? AND u.password = ?;';

        return new Promise((resolve, reject) => {
            MySQL.query(sql, [email, password], (err, userResults) => {
                if (err) {
                    resolve(Boom.badRequest('Bad request'));
                }

                let userResult = null;
                if (userResults.length === 1) {
                    userResult = userResults[0];
                    delete userResult.password;
                    userResult.scope = ['chef', 'detective', 'agent'].slice(userResult.rank - 1);
                }

                resolve(userResult);
            });
        });
    },

    getPendingUsers() {
        const axiosInstance = Axios.create({
            baseURL: Config.env.microservices.edit_user,
            timeout: 4000
        });
        return new Promise((resolve, reject) => {
            axiosInstance.get("/app_user/pending")
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response) {
                        resolve(Boom.badRequest('Bad request'));
                    } else if (error.request) {
                        resolve(Boom.serverUnavailable('Microservice unreachable.'));
                    }
                });
        });
    },

    updatePendingUser(userId, isValidated) {
        const axiosInstance = Axios.create({
            baseURL: Config.env.microservices.edit_user,
            timeout: 4000
        });
        if (isValidated) {
            return new Promise((resolve, reject) => {
                axiosInstance.put("/app_user/" + userId + "/certify")
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response) {
                        resolve(Boom.badRequest(error.response.data));
                    } else if (error.request) {
                        resolve(Boom.serverUnavailable('Microservice unreachable.'));
                    }
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                axiosInstance.delete("/app_user/" + userId)
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            resolve(Boom.badRequest('Bad request'));
                        } else if (error.request) {
                            resolve(Boom.serverUnavailable('Microservice unreachable.'));
                        }
                    });
            });
        }
    },

    exportToCSV() {
        //call microservice
        return '//csv file';
    }
};
