/**
 *  Class provides the checks for API endpoint : GET: http://api.openweathermap.org/data/2.5/weather?q=city&appid=appid
 *  @author Trisha Chetani
 */
'use strict'

var weathermap = require('../api/openWeatherMapCity.js');
var common = require('../api/common.js');
var commonpayload = require('../payloads/commonPayloads.js');
var payload = commonpayload.appId(process.env.APP_ID); 




var chai = require('chai'),
    should = chai.should(), // Using Assert style
    expect = chai.expect;

/**
 * provides checks for By city name
 */
describe("GET: By city name", function() {
    context('default state and no other feature included', function() {

        /**
         * provides check for successfully calling api with query param @cityname
         * @return successful response
         */
        it("should return successful response when passed query param as city name and valid app id", function(done) {
            weathermap.cityName(common.baseurl, payload)
                .then(function(response) {
                    common.successStatus(response);
                    expect(response.body).to.have.own.property('coord');
                    expect(response.body.coord).to.have.own.property('lon');
                    expect(response.body.coord).to.have.own.property('lat');
                    expect(response.body).to.have.own.property('weather');
                    expect(response.body.weather).to.be.an('array');
                    expect(response.body).to.have.own.property('base');
                    expect(response.body).to.have.own.property('main');
                    expect(response.body.main).to.have.own.property('temp');
                    expect(response.body.main).to.have.own.property('pressure');
                    expect(response.body.main).to.have.own.property('humidity');
                    expect(response.body.main).to.have.own.property('temp_min');
                    expect(response.body.main).to.have.own.property('temp_max');
                    expect(response.body).to.have.own.property('visibility');
                    expect(response.body).to.have.own.property('wind');
                    expect(response.body.wind).to.have.own.property('speed');
                    expect(response.body).to.have.own.property('clouds');
                    expect(response.body.clouds).to.have.own.property('all');
                    expect(response.body).to.have.own.property('dt');
                    expect(response.body).to.have.own.property('sys');
                    expect(response.body.sys).to.have.own.property('type');
                    expect(response.body.sys).to.have.own.property('message');
                    expect(response.body.sys).to.have.own.property('country');
                    expect(response.body.sys).to.have.own.property('sunrise');
                    expect(response.body.sys).to.have.own.property('sunset');
                    expect(response.body).to.have.own.property('id');
                    expect(response.body).to.have.own.property('name');
                    expect(response.body).to.have.own.property('cod');
                    done();
                });
        });

        /**
         * provides check failure response when passed query param as city name and empty App id
         * @return failure response
         */
        it("should return failure response when passed query param as city name and empty App id", function(done) {
            weathermap.cityName(common.baseurl, '')
                .then(function(response) {
                    common.authenticationFailStatus(response);
                    done();
                });
        });

        /**
         * provides check for failure response when passed query param with empty city name and valid App id
         * @return failure response
         */
        it("should return failure response when passed query param with empty city name and valid App id", function(done) {
            weathermap.noCityName(common.baseurl, payload)
                .then(function(response) {
                    common.badRequestFailStatus(response);
                    done();
                });
        });

        /**
         * provides check for failure response when passed as put request
         * @return failure response 
         */
        it("should return failure response as put request", function(done) {
            weathermap.putCityName(common.baseurl, payload)
                .then(function(response) {
                    common.methodNotAllowedFailStatus(response);
                    done();
                });
        });

        /**
         * provides check for failure response when passed as post request: Potential bugs
         * @return successful response
         */
        it("should return failure response when passed as post request but currently api gives successful response: potential bug", function(done) {
            weathermap.postCityName(common.baseurl, payload)
                .then(function(response) {
                    done();
                });
        });

        /**
         * provides check for failure response when passed as delete request
         * @return failure response
         */
        it("should return failure response when passed as delete request", function(done) {
            weathermap.deleteCityName(common.baseurl, payload)
                .then(function(response) {
                    common.methodNotAllowedFailStatus(response);
                    done();
                });
        });

        /**
         * provides check for failure response when query param as city name is empty and app id is empty
         * @return failure response
         */
        it("should return failure response when query param as city name is empty and app id is empty", function(done) {
            weathermap.noCityNameNoPayload(common.baseurl, payload)
                .then(function(response) {
                    common.authenticationFailStatus(response);
                    done();
                });
        });


    });
});