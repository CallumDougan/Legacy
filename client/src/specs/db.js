var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var PouchDb = require('pouchdb');
// console.log(chai)

describe('PouchDb', function(){
  beforeEach(function(){
    db = new PouchDb('test');
  });

  it('should exist', function(){
    assert.isNotFalse(db);
  });

  it('should accept documents', function(){
    
  });

});