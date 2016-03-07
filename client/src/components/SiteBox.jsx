var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');
var SiteList = require('./SiteList.jsx');
var SiteForm = require('./SiteForm.jsx');

var dummyData = require('../dummyData.json');
var siteDb = new PouchDB('siterecord');
var remoteCouch = 'http://localhost:5984/siterecord';

var SiteBox = React.createClass({

  componentDidMount: function(){


      siteDb.bulkDocs(dummyData).then(function(result){
        console.log('data loaded: ', result);
      }).catch(function(err){
        console.log(err);
      });

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

  handleSiteSubmit: function(){
    // stuff
    var date = new Date;
    var JSONDate = date.toJSON();
    siteDb.put({
      _id: JSONDate,
      name: 'test',
      type: 'site',
      lat: '43',
      long: '43'
    }).then(function(response){
      console.log(response);
      siteDb.allDocs({include_docs: true, descending: true}).then(function(result){
        result.rows.forEach(function(one){
          if(one.doc.type === 'site'){
          console.log(one.doc)
          }
        });
      }.bind(this));
    }).catch(function(err){
      console.log(err);
    });
  },

  getInitialState: function(){
    return { sites: [] }
  },

  render: function(){
    console.log('I render', this.state.sites)
    return(
      <div>
      <h1>SiteBox</h1>
      <SiteList sites={ this.state.sites }/>
      <SiteForm onSiteSubmit={ this.handleSiteSubmit }/>
      <TrenchBox/>
      </div>
      )
  }
});

module.exports = SiteBox;