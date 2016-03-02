window.onload = function(){

  var React = require('react');
  var ReactDOM = require('react-dom');
  var TrenchBox = require('./components/trenchBox.jsx');
  
  (function() {


    var PouchDB = require('pouchdb');

    'use strict';

    var ENTER_KEY = 13;
    var db = new PouchDB('sites');
    var remoteCouch = 'http://localhost:5984/sites';

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