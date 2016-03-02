window.onload = function(){
  console.log('app loaded');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TrenchBox = require('./components/trenchBox.jsx');

  (function() {


    var PouchDB = require('pouchdb');

    'use strict';

    var ENTER_KEY = 13; 
    var db = new PouchDB('siterecord');
    var remoteCouch = 'http://localhost:5984/siterecord';

    var date = new Date();
    var JSONDate = date.toJSON();


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



// can grab params from a doc now!
      var docArray = []

    db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      doc.rows.forEach(function(one){
        docArray.push(one.id);
      })
      console.log(doc.rows, docArray)
    });

    // db.changes({
    //   since: 'now',
    //   live: true
    // }).on('change', showSites);

  })();

  ReactDOM.render(
    <TrenchBox/>,
    document.getElementById('legacyapp')
    );
}