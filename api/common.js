var chai = require('chai');
var assert = chai.assert;

var status = function() {

    this.baseurl = process.env.npm_package_config_host;

    this.authenticationFailStatus = function(response) {
        assert.equal('401', response.status);
    }

    this.badRequestFailStatus = function(response) {
        assert.equal('400', response.status);
    }

    this.methodNotAllowedFailStatus = function(response) {
        assert.equal('405', response.status);
    }

    this.successStatus = function(response) {
        assert.equal('200', response.status);
    }
};

module.exports = new status();