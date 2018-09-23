'use strict';

const CrimeModel = require('../model/crime');

module.exports = {
    getChartData: async (request, h) => {
        return await CrimeModel.getChartData();
    },
    addCrime: async (request, h) => {
        return await CrimeModel.addCrime(request.payload);
    },
    searchCrimes: async (request, h) => {
        return await CrimeModel.searchCrimes(request.payload);
    }
};
