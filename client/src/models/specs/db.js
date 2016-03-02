var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var assert = chai.assert;
var expect = chai.expect;
var PouchDb = require('pouchdb');


describe('PouchDb', function(){
  beforeEach(function(done){

    db = new PouchDb('test');

    date = new Date();
    JSONDate = date.toJSON();

    db.put({
      "_id": JSONDate,
      "title": 'testDoc'
    }).then(function(response){
      done();
    }).catch(function(err){
      done();
    });
  });

  // TESTING BEGINS

  it('should exist', function(){
    assert.isNotFalse(db);
  });


  it('should accept documents', function(){
    return db.get(JSONDate).then(function(result){
      console.log('result', result._id)
      expect(result._id).to.equal(JSONDate);
    });
  });
});