window.onload = function(){
  console.log('app loaded');

  var React = require('react');
  var ReactDOM = require('react-dom');
  var SiteBox = require('./components/SiteBox.jsx');
  var dummyData = require('./dummyData.json');

  (function() {

    var PouchDB = require('pouchdb');

    'use strict';

    var ENTER_KEY = 13; 
    var db = new PouchDB('siterecord');
    var remoteCouch = 'http://localhost:5984/siterecord';

    var date = new Date();
    var JSONDate = date.toJSON();

    db.destroy().then(
      db.bulkDocs(dummyData).then(function(result){
        console.log('data loaded: ', result);
      }).catch(function(err){
        console.log(err);
      });
      );

    var docArray = [];

    db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      doc.rows.forEach(function(one){
        console.log('populating seed data')
        docArray.push(one.doc.type);
      })
      console.log(doc.rows, docArray)
    });

    // db.changes({
    //   since: 'now',
    //   live: true
    // }).on('change', showSites);

  })();

  ReactDOM.render(
    <SiteBox/>,
    document.getElementById('legacyapp')
    );
}