var React = require('react');

var Context = require('../models/context.js');
var FindBox = require('./FindBox.jsx');

var ContextBox = React.createClass({
render: function(){
return(
  <div>
  <h3>ContextBox</h3>
  <FindBox/>
  </div>
  )
}
});

module.exports = ContextBox;