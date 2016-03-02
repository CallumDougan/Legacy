var chai = require('chai');
var assert = chai.assert;

var PouchDb = require('pouchdb');

var Trench = require('../trench.js');

var Site = require('../site.js');
var Context = require('../context.js');

describe('Trench', function(){

  beforeEach(function(){
    testSite = new Site('Test Site', 55, 40)
    testTrench = new Trench(testSite, 1, 2);
    testContext = new Context();

    testTrench.generateID();

    testContext = new Context(testTrench);
    testContext.generateID();
  });


  // Basic properties

  it('should exist', function(){
  assert.isOk(testTrench);
  });

  it('should have a unique ID', function(){
    assert.equal(testTrench.id, 'Test Site 55-40:T1');
  });

  it('should have dimensions', function(){
    assert.equal(testTrench.length, 1);
    assert.equal(testTrench.breadth, 2)
  });

  it('should contain an array of contexts', function(){
    var previousLength = testTrench.contexts.length;
    testTrench.addContext(testContext);
    assert.deepEqual(testTrench.contexts.length, previousLength + 1);
  });

  it('should increment contextCounter on counter ID assignment', function(){
    assert.equal(testTrench.contextCounter, 1);
  });


});