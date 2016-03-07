var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');
var SiteList = require('./SiteList.jsx');
var SiteForm = require('./SiteForm.jsx');

var SiteBox = React.createClass({

  componentDidMount: function(){
    var dummyData = require('../dummyData.json');
    var siteDb = new PouchDB('siterecord');
    var remoteCouch = 'http://localhost:5984/siterecord';
    siteDb.destroy().then(
      siteDb.bulkDocs(dummyData).then(function(result){
        console.log('data loaded: ', result);
      }).catch(function(err){
        console.log(err);
      }));

    var siteArray = [];
    siteDb.allDocs({include_docs: true, descending: true}).then(function(result){
      result.rows.forEach(function(one){
        if(one.doc.type === 'site'){
          siteArray.push(one.doc)
        }
      });
      this.setState( { sites: siteArray } );
    }.bind(this));

  },

  getInitialState: function(){
    return { sites: [] }
  },

  render: function(){
    console.log('I render', this.state.sites)
    return(
      <div>
      <h1>SiteBox</h1>
      <SiteList/>
      <SiteForm/>
      <TrenchBox/>
      </div>
      )
  }
});

module.exports = SiteBox;