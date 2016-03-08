window.onload = function(){
  console.log('app loaded');

var React = require('react');
var ReactDOM = require('react-dom');
var PouchDB = require('pouchdb');
var dummyData = require('./dummyData.json');


var SiteBox = require('./components/SiteBox.jsx');

var siteDb = new PouchDB( {name : 'siterecord', auto_compaction : true} );
var remoteCouch = 'http://localhost:5984/siterecord';


        ReactDOM.render(
          <SiteBox siteDb = { siteDb }/>,
          document.getElementById('legacyapp')
          )


}

//     db.changes({
//       since: 'now',
//       live: true
//     }).on('change', showSites);