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
    },
    deleteCrime: async (request, h) => {
        return await CrimeModel.deleteCrime(request.params.crimeId);
    }
};
