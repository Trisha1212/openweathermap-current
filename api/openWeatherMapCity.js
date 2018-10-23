"use strict";

var request = require('supertest-as-promised');

//GET By city name 
exports.cityName = function(baseurl, payload, cnPayload) {
    return request(baseurl)
        .get('/weather')
        .query(cnPayload)
        .query(payload);
};
exports.noCityName = function(baseurl, payload,cnPayload) {
    return request(baseurl)
        .get('/weather')
        .query(cnPayload)
        .query(payload);
};

exports.putCityName = function(baseurl, payload, cnPayload) {
    return request(baseurl)
        .put('/weather')
        .query(cnPayload)
        .query(payload);
};

exports.postCityName = function(baseurl, payload,cnPayload) {
    return request(baseurl)
        .post('/weather')
        .query(cnPayload)
        .query(payload);
};

exports.deleteCityName = function(baseurl, payload, cnPayload) {
    return request(baseurl)
        .delete('/weather')
        .query(cnPayload)
        .query(payload);
};

exports.noCityNameNoPayload = function(baseurl, payload, cnPayload) {
    return request(baseurl)
        .get('/weather')
        .query(cnPayload)
        .query(payload);
};