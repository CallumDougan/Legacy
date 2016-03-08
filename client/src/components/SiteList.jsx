var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');

var SiteList = React.createClass({

  handleClick: function(e){
    e.preventDefault();
    console.log('clicked a site link', e.target.innerText);
    var siteId = e.target.innerText;

    var site = this.props.findSiteById(siteId);
    console.log('site', site)

    this.props.openTrenches(site);
  },

  render: function(){
    var self = this;
    var siteNodes = this.props.sites.map(function(site){
      return(
        <li
        id={site.id}
        key={ site.site_id }>
        <a
        href=""
        onClick={ self.handleClick }>
        { site.site_id }
        </a>
        </li>
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