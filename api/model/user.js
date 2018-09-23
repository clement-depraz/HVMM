'use strict';

const MySQL = require('../mysql');

module.exports = {
    getValidatedUser(email, password) {
        const sql = 'SELECT u.id, u.first_name, u.last_name, u.email, u.password, u.isAdmin, r.label as rank'
        + ' FROM users u INNER JOIN rank r ON r.id = u.rank'
        + ' WHERE u.isCertified = 1 AND u.email = ? AND u.password = ?;';

        return new Promise((resolve, reject) => {
            MySQL.query(sql, [email, password], (err, userResults) => {
                if (err) {
                    throw err;
                }

                let userResult = null;
                if (userResults.length === 1) {
                    userResult = userResults[0];
                    delete userResult.password;
                    userResult.scope = userResult.isAdmin ? ['user', 'admin'] : ['user'];
                }

                resolve(userResult);
            });
        });
    },
    getPendingUsers() {
        //call microservice
        return [{
            id: 1,
            name: 'truc'
        }];
    },
    updatePendingUser(userId, isValidated) {
        //call microservice
        if (isValidated) {
            //update user status
        } else {
            //delete user
        }

        return '//sql result';
    },
    exportToCSV() {
        //call microservice
        return '//csv file';
    }
};
