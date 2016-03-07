window.onload = function(){
  console.log('app loaded');

var React = require('react');
var ReactDOM = require('react-dom');
var SiteBox = require('./components/SiteBox.jsx');

    ReactDOM.render(
      <SiteBox/>,
      document.getElementById('legacyapp')
      );
}

// var dummyData = require('./dummyData.json');
// var db = null;

// (function() {

//   var PouchDB = require('pouchdb');

//   'use strict';

//   var ENTER_KEY = 13; 
//   db = new PouchDB('siterecord');
//   var remoteCouch = 'http://localhost:5984/siterecord';

//   var date = new Date();
//   var JSONDate = date.toJSON();

//   db.destroy().then(
//     db.bulkDocs(dummyData).then(function(result){
//       console.log('data loaded: ', result);
//     }).catch(function(err){
//       console.log(err);
//     })
//     );

//   var docArray = [];

//   db.allDocs({include_docs: true, descending: true}, function(err, doc) {
//     console.log('populating seed data')
//     doc.rows.forEach(function(one){
//       docArray.push(one.doc);
//     })
//     console.log(doc.rows, docArray)
//   })

//     db.changes({
//       since: 'now',
//       live: true
//     }).on('change', showSites);