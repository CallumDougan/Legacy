window.onload = function(){
  console.log('app loaded');

var React = require('react');
var ReactDOM = require('react-dom');
var PouchDB = require('pouchdb');
var dummyData = require('./dummyData.json');


var SiteBox = require('./components/SiteBox.jsx');

var siteDb = new PouchDB( {name : 'siterecord', auto_compaction : true} );
var trenchDb = new PouchDB( {name: 'trenchrecord', auto_compaction: true} );

// Seed date setup
console.log('adding test trench...');
trenchDb.put({
  _id: 'test',
  type: 'trench',
  site_id: 'Tgh 671-1112'
})

var remoteCouch = 'http://localhost:5984/siterecord';




        ReactDOM.render(
          <SiteBox siteDb = { siteDb } trenchDb={ trenchDb }/>,
          document.getElementById('legacyapp')
          )


}

//     db.changes({
//       since: 'now',
//       live: true
//     }).on('change', showSites);