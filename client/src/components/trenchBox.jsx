var React = require('react');

var Trench = require('../models/trench.js');
var ContextBox = require('./ContextBox.jsx');


var TrenchBox = React.createClass({
  render: function(){
    return(
      <div>
      <h2>TrenchBox</h2>
      <ContextBox/>
      </div>
      )
  }
});

module.exports = TrenchBox;