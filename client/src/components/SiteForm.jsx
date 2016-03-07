var React = require('react');
var PouchDB = require('pouchdb');


var Site = require('../models/site.js');

var SiteForm = React.createClass({

  getInitialState: function(){
    return{ name: '', type: '', lat: '', long: ''};
  },

  handleSubmit: function(e){
    console.log('submitting site...', this.props.siteDb)
    e.preventDefault();

    var name = this.state.name.trim();
    var lat = this.state.lat.trim();
    var long = this.state.long.trim();

    this.setState( {name: name, lat: lat, long: long} );
    this.props.onSiteSubmit( {name: name, lat: lat, long: long} )
  },

  render: function(){
    return(
      <div>
      <form onSubmit={ this.handleSubmit }>
      <input
      type="text"
      placeholder="Site name"
      value={ this.state.name }
      onChange= { this.handleSiteNameChange }/>
      <input
      type="text"
      placeholder="Site latitude"
      value={ this.state.lat }
      onChange= { this.handleLatitudeChange }/>
      <input
      type="text"
      placeholder="Site longtitude"
      value={ this.state.long }
      onChange= { this.handleLongtitudeChange }/>
      <input
      type='submit'
      value='Submit site'/>
      </form>
      </div>
      )
  }
});

module.exports = SiteForm;