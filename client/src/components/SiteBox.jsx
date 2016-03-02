var React = require('react');

var Site = require('../models/site.js');
var TrenchBox = require('./TrenchBox.jsx');

var SiteBox = React.createClass({
  render: function(){
    return(
      <div>
      <b><h1>SiteBox</h1></b>
      <TrenchBox/>
      </div>
      )
  }
});

module.exports = SiteBox;