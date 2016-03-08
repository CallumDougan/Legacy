var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');

var SiteList = React.createClass({

  handleClick: function(e){
    e.preventDefault();
    console.log('clicked a site link');
  },

  render: function(){
    var self = this;
    var siteNodes = this.props.sites.map(function(site){
      return(
        <li><a
        href=""
        id={site.id}
        key={ site.site_id }
        onClick={ self.handleClick }>
        { site.name }
        </a></li>
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