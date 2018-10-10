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
        // const myobj = {
        //     'compnos': 152038705,
        //     'naturecode': 'SSA',
        //     'incident_type_description': 'BONJOUR',
        //     'main_crimecode': 'BONJOUR',
        //     'reptdistrict': 'C11',
        //     'reportingarea': 0,
        //     'fromdate': '2015-05-12T00:10:00.000+0000',
        //     'weapontype': 'Other',
        //     'shooting': false,
        //     'domestic': false,
        //     'shift': 'Last',
        //     'year': 2015,
        //     'month': 5,
        //     'day_week': 'Tuesday',
        //     'ucrpart': 'Part Two',
        //     'x': '771681.0593',
        //     'y': '2935070.74',
        //     'streetname': 'ROSSETER ST',
        //     'xstreetname': 'BULLARD ST',
        //     'location': '(42.30119026, -71.07299707)'
        // };
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
    searchCrimes(payload) {
        const instance = Axios.create({
            baseURL: Config.env.microservices.search_crime,
            timeout: 4000
        });
        let params = {
            page: payload.page - 1,
            filters: payload
        };
        delete params.filters.page;
        return new Promise((resolve, reject) => {
            instance.post("/search", params)
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
    }
};
