var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');

var SiteList = React.createClass({

  handleClick: function(){
    console.log('clicked a site link');
  },

  render: function(){
    var siteNodes = this.props.sites.map(function(site){
      return(
        <li><a href="" key={ site.id } >{ site.name }</a></li>
        )
    });

    return(
      <ul>
      { siteNodes }
      </ul>
      )
  }
});

module.exports = SiteList;