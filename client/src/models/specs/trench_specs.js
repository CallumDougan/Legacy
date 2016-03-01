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
    testTrench.addContext(testContext);
  });


  // Basic properties

  it('should exist', function(){
  assert.isOk(testTrench);
  });

  it('should have a unique ID', function(){
    assert.equal(testTrench.id, 'Test Site 55-40:1');
  });

  it('should have dimensions', function(){
    assert.equal(testTrench.length, 1);
    assert.equal(testTrench.breadth, 2)
  });

  it('should contain an array of contexts', function(){
    assert.deepEqual(testTrench.contexts, [testContext]);
  })


});