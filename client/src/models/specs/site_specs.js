var chai = require('chai');
var assert = chai.assert;

var PouchDb = require('pouchdb');

var Site = require('../site.js');
var Trench = require('../trench.js');

describe('Site', function(){
  beforeEach(function(){
    testSite = new Site('Test Site', 55, 40)
    testTrench = new Trench(testSite, 1, 2);
    testTrench.generateID();
  });

  it('should exist', function(){
    assert.isOk(testSite);
  });

  it('should increment trenchCounter on trench assignment', function(){
    assert.equal(testSite.trenchCounter, 1)
  })
})