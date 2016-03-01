var chai = require('chai');
var assert = chai.assert;

var PouchDb = require('pouchdb');

var Trench = require('../trench.js');
var Site = require('../site.js');

describe('Trench', function(){

  beforeEach(function(){
    testSite = new Site('Test Site', 55, 40)
    testTrench = new Trench(testSite, 1, 2);
    testTrench.generateID();
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


});