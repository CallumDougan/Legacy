var chai = require('chai');
var assert = chai.assert;

var PouchDb = require('pouchdb');
var Trench = require('../trench.js');

describe('Trench', function(){

  beforeEach(function(){

    testTrench = new Trench();

  });


  // testing begins

  it('should exist', function(){
  assert.isOk(testTrench);
  });


});