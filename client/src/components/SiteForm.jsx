var React = require('react');
var PouchDB = require('pouchdb');


var dummyData = require('../dummyData.json');
var Site = require('../models/site.js');

var SiteForm = React.createClass({

  getInitialState: function(){
    return{ name: '', type: '', lat: '', long: ''};
  },

  handleSiteNameChange: function(e){
    this.setState({ name: e.target.value })
  },

  handleLatitudeChange: function(e){
    this.setState({ lat: e.target.value })
  },

  handleLongtitudeChange: function(e){
    this.setState({ long: e.target.value })
  },

  handleSubmit: function(e){
    e.preventDefault();

    var name = this.state.name.trim();
    var lat = this.state.lat.trim();
    var long = this.state.long.trim();
    var site = 'site'

    this.setState( {name: name, type: site, lat: lat, long: long} );
    this.props.onSiteSubmit( {name: name, type: site, lat: lat, long: long} )
    console.log('submitting site...', this.state)

  },

  render: function(){

    // SOMEWHERE IN HERE, A BUTTON TO FORCE SEEDING
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