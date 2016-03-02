var chai = require('chai');
var assert = chai.assert;

var PouchDb = require('pouchdb');

var Context = require('../context.js');
var Trench = require('../trench.js');
var Site = require('../site.js');

describe('Context', function(){
  beforeEach(function(){
    testSite = new Site('Test Site', 55, 40)

    testTrench = new Trench(testSite, 1, 2);
    testTrench.generateID();

    testContext = new Context(testTrench);
    testContext.generateID();
  });

  it('should exist', function(){
    assert.isOk(testContext);
  });

  it('should belong to a trench', function(){
    assert.equal(testContext.trench, testTrench);
  })

  it('should have an ID', function(){
    assert.equal(testContext.id, 'Test Site 55-40:T1:C1');
  });
})