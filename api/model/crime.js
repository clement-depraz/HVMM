'use strict';

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
        //check mongodb
        const myobj = {
            'compnos': 152038705,
            'naturecode': 'SSA',
            'incident_type_description': 'BONJOUR',
            'main_crimecode': 'BONJOUR',
            'reptdistrict': 'C11',
            'reportingarea': 0,
            'fromdate': '2015-05-12T00:10:00.000+0000',
            'weapontype': 'Other',
            'shooting': false,
            'domestic': false,
            'shift': 'Last',
            'year': 2015,
            'month': 5,
            'day_week': 'Tuesday',
            'ucrpart': 'Part Two',
            'x': '771681.0593',
            'y': '2935070.74',
            'streetname': 'ROSSETER ST',
            'xstreetname': 'BULLARD ST',
            'location': '(42.30119026, -71.07299707)'
        };
        return new Promise((resolve, reject) => {
            MongoDB.collection('crime_incident_reports').insertOne(myobj, (err, res) => {
                if (err) {
                    throw err;
                }

                console.log('1 document inserted');
                resolve(true);
            });
        });
    },
    searchCrimes(payload) {
        //call microservice
        return [{}, {}];
    }
};
