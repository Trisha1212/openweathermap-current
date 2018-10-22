request = require('supertest-as-promised')

//GET By city name 
exports.cityName = function(baseurl, payload) {
    return request(baseurl)
        .get('/weather')
        .query({
            q: 'London'
        })
        .query(payload)
};
exports.noCityName = function(baseurl, payload) {
    return request(baseurl)
        .get('/weather')
        .query({
            q: ''
        })
        .query(payload)
};

exports.putCityName = function(baseurl, payload) {
    return request(baseurl)
        .put('/weather')
        .query({
            q: 'London'
        })
        .query(payload)
};

exports.postCityName = function(baseurl, payload) {
    return request(baseurl)
        .post('/weather')
        .query({
            q: 'London'
        })
        .query(payload)
};

exports.deleteCityName = function(baseurl, payload) {
    return request(baseurl)
        .delete('/weather')
        .query({
            q: 'London'
        })
        .query(payload)
};

exports.noCityNameNoPayload = function(baseurl, payload) {
    return request(baseurl)
        .get('/weather')
        .query({
            q: ''
        })
        .query()
};