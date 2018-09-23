'use strict';

module.exports = {
    getValidatedUser(email, password) {
        //check sql
        if (email === 'email@email.com' && password === 'password') {
            return {
                isLogged: true,
                email: email,
                scope: ['user', 'admin']
            };
        } else {
            return false;
        }
    },
    getPendingUsers() {
        //check sql
        return [{id: 1, name: 'truc'}];
    },
    updatePendingUser(userId, isValidated) {
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
