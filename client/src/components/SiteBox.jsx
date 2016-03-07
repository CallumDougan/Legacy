var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');
var SiteList = require('./SiteList.jsx');
var SiteForm = require('./SiteForm.jsx');

var dummyData = require('../dummyData.json');


var SiteBox = React.createClass({

  componentDidMount: function(){

    // NEW APPROACH: INSTEAD OF SEEDING DATA ONLOAD, WHY NOT JUST HAVE A BUTTON? REFACTOR TO REMOVE ALL ATTEMPTS TO SEED DATA ONLOAD

    var self = this;
    var siteArray = [];
    var allDocs = undefined;

    this.props.siteDb.allDocs({include_docs: true, descending: true
    }).then(function(result){
      console.log('alldocs result', result, self.props.siteDb)
      result.rows.forEach(function(one){
        if(one.doc.type === 'site'){
          siteArray.push(one.doc);
          console.log('added:', one)
        }
      });
    }).then(function(result){
      console.log('state set');
      self.setState( { sites: siteArray } );
    }).catch(function(err){
      console.log(err)
    })
  },

  handleSiteSubmit: function(){
    // stuff
    var self = this;
    var date = new Date;
    var JSONDate = date.toJSON();
    this.props.siteDb.put({
      _id: JSONDate,
      name: 'test',
      type: 'site',
      lat: '43',
      long: '43'
    }).then(function(response){
      console.log(response);
      self.props.siteDb.allDocs({include_docs: true, descending: true}).then(function(result){
        result.rows.forEach(function(one){
          if(one.doc.type === 'site'){
            console.log(one.doc)
          }
        });
      });
    }).catch(function(err){
      console.log(err);
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
      <SiteList sites={ this.state.sites }/>
      <SiteForm onSiteSubmit={ this.handleSiteSubmit } siteDb={ this.props.siteDb }/>
      <TrenchBox/>
      </div>
      )
  }
});

module.exports = SiteBox;