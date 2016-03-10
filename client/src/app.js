window.onload = function(){
  console.log('app loaded');

var React = require('react');
var ReactDOM = require('react-dom');
var PouchDB = require('pouchdb');
var dummyData = require('./dummyData.json');


var SiteBox = require('./components/SiteBox.jsx');

var siteDb = new PouchDB( {name : 'siterecord', auto_compaction : true} );
var trenchDb = new PouchDB( {name: 'trenchrecord', auto_compaction: true} );
var syncDom = document.getElementById('sync-wrapper');


// Seed date setup
console.log('adding test trench...');
trenchDb.put({
  _id: 'test',
  type: 'trench',
  site_id: 'Tgh 671-1112'
})

var remoteCouch = 'http://localhost:5984/siterecord';

function syncError() {
  syncDom.setAttribute('data-sync-state', 'error');
}

function sync() {
  syncDom.setAttribute('data-sync-state', 'syncing');
  var opts = {live: true};
  siteDb.replicate.sync(remoteCouch, opts, syncError);
}

if(remoteCouch){
  sync();
}




ReactDOM.render(
<SiteBox siteDb = { siteDb } trenchDb={ trenchDb }/>,
document.getElementById('legacyapp')
)


}

//     db.changes({
//       since: 'now',
//       live: true
//     }).on('change', showSites);