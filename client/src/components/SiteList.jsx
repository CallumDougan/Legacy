var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');

var SiteList = React.createClass({
  render: function(){
    var siteNodes = this.props.sites.map(function(site){
      return(
        <li><a href="" siteId={ site.id }>{ site.name }</a></li>
        )
    })


    return(
      <ul>
      { siteNodes }
      </ul>
      )
  }
});

module.exports = SiteList;