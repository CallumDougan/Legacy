var React = require('react');

var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');

var SiteBox = React.createClass({
  render: function(){
    console.log('db in SiteBox',  this.props.db.allDocs({include_docs: true, descending: true}))
    return(
      <div>
      <h1>SiteBox</h1>
      {this.props.id}
      <TrenchBox/>
      </div>
      )
  }
});

module.exports = SiteBox;