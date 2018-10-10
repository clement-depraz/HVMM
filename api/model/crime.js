'use strict';

const Axios = require('axios');
const Boom = require('boom');
const RequireDir = require('require-directory');

const Config = RequireDir(module, '../config');
const MongoDB = require('../mongodb');

module.exports = {
    getChartData(email, password) {
        //call microservice
        return {
            x: ['a', 'b', 'c'],
            y:[1, 2, 3]
        };
    },
    addCrime(payload) {
        return new Promise((resolve, reject) => {
            MongoDB.collection('crime_incident_reports').insertOne(payload, (err, res) => {
                if (err) {
                    resolve(Boom.badRequest('Bad request'));
                } else {
                    resolve(true);
                }
            });
        });
    },
    deleteCrime(crimeId) {
        return new Promise((resolve, reject) => {
            MongoDB.collection('crime_incident_reports').deleteOne({ compnos:crimeId }, (err) => {
                if (err) {
                    resolve(Boom.badRequest('Bad request'));
                } else {
                    resolve(true);
                }
            });
        });
    },
    searchCrimes(payload) {
        const instance = Axios.create({
            baseURL: Config.env.microservices.search_crime,
            timeout: 4000
        });
        const params = {
            page: payload.page - 1,
            filters: payload
        };
        delete params.filters.page;
        return new Promise((resolve, reject) => {
            instance.post('/search', params)
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    if (error.response) {
                        const data = error.response.data;
                        resolve(Boom.badRequest(data[Object.keys(data)[0]]));
                    } else if (error.request) {
                        resolve(Boom.serverUnavailable('Microservice unreachable.'));
                    }
                });
        });
    }
};
