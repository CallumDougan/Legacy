var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');
var SiteList = require('./SiteList.jsx');
var SiteForm = require('./SiteForm.jsx');

var siteArray = [];


var SiteBox = React.createClass({


  componentDidMount: function(){

    // NEW APPROACH: INSTEAD OF SEEDING DATA ONLOAD, WHY NOT JUST HAVE A BUTTON? REFACTOR TO REMOVE ALL ATTEMPTS TO SEED DATA ONLOAD
    var self = this;

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

  handleSiteSubmit: function(site){
    console.log('data?', this.state, site)
    var siteLogic = new Site(site.name, site.lat, site.long)
    var date = new Date;
    var JSONDate = date.toJSON();

    this.props.siteDb.put({
      _id: JSONDate,
      site_id: siteLogic.id,
      name: site.name,
      type: 'site',
      lat: site.lat,
      long: site.long
    });

    var newSites = siteArray.concat( [site] )

    this.setState( { sites: siteArray } )
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