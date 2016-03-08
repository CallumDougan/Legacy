var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');
var SiteList = require('./SiteList.jsx');
var SiteForm = require('./SiteForm.jsx');

var siteArray = [];


var SiteBox = React.createClass({


  componentDidMount: function(){
    var self = this;

    this.props.siteDb.allDocs({include_docs: true, descending: true
    }).then(function(result){
      console.log('alldocs result', result, self.props.siteDb);
      result.rows.forEach(function(one){
        if(one.doc.type === 'site'){
          siteArray.push(one.doc);
          console.log('added:', one);
        }
      });
    }).then(function(result){
      console.log('state set');
      self.setState( { sites: siteArray } );
    }).catch(function(err){
      console.log(err);
    })
  },

  handleSiteSubmit: function(site){
    console.log('data?', site);
    var siteLogic = new Site(site.name, site.lat, site.long)
    var date = new Date;
    var JSONDate = date.toJSON();

    var siteEntry = {
      _id: JSONDate,
      site_id: siteLogic.id,
      name: site.name,
      type: 'site',
      lat: site.lat,
      long: site.long
    };

    this.props.siteDb.put({
      _id: JSONDate,
      site_id: siteLogic.id,
      name: site.name,
      type: 'site',
      lat: site.lat,
      long: site.long
    });

    var newSites = siteArray.concat( [siteEntry] );
    this.setState( { sites: newSites } );
  },

  findSiteById: function(siteId){
    for(var site of this.state.sites){
      if(site.site_id === siteId){
        return site;
      }
    }
  },

  openTrenches: function(site){
    var foundTrench = undefined;

    console.log('finding trench...');
    this.props.trenchDb.allDocs( { include_docs: true, descending: true
    } ).then(function(result){
      for(var row of result.rows){
        if(row.doc.site_id === site.site_id){
          console.log('found', row.doc);
          foundTrench = row.doc;
        }
      }
    }
    )
  },

  getInitialState: function(){
    return { sites: [] };
  },

  render: function(){
    console.log('I render', this.state.sites);
    return(
      <div>
      <h1>SiteBox</h1>
      <SiteList sites={ this.state.sites } findSiteById={ this.findSiteById } openTrenches={ this.openTrenches }/>
      <SiteForm onSiteSubmit={ this.handleSiteSubmit } siteDb={ this.props.siteDb }/>
      <TrenchBox/>
      </div>
      );
  }
});

module.exports = SiteBox;