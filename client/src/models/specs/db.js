var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var assert = chai.assert;
var expect = chai.expect;
var PouchDb = require('pouchdb');


describe('PouchDb', function(){
  beforeEach(function(){

    db = new PouchDb('test');

    date = new Date();
    JSONDate = date.toJSON();


    db.put({
      "_id": JSONDate,
      "title": 'testDoc'
    }).then(function(response){
      console.log(response);
      done();
    }).catch(function(err){
      console.log(err);
      done();
    });


  });

  // TESTING BEGINS

  it('should exist', function(){
    assert.isNotFalse(db);
  });


  it('should accept documents', function(){
    db.get(JSONDate).then(assert.equal(undefined, JSONDate))
  });
});