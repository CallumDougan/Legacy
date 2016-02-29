
var PouchDb = require('pouchdb');
db = new PouchDb('test');

date = new Date();
JSONDate = date.toJSON();


var returnedPromise = db.put({
  "_id": JSONDate,
  "title": 'testDoc'
})

returnedPromise.then(function(response){
  console.log(response);
}).catch(function(err){
  console.log(err);
});

db.get(JSONDate).then(function(doc){
  console.log('test')
  console.log("got the doc", doc)
  var test = doc;
});