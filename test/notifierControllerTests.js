var assert = require('assert')
var service = require('../services/notifierService')

describe('notifierService', function() {
  describe('#ping()', function() {
    it('should return pong always', function() {
        assert.equal(service.ping(), "pong");
    });
  });
});