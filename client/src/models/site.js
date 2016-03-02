var Site = function(name, lat, lng){
  this.trenchCounter = 0;
  this.name = name;
  this.latLng = lat + '-' + lng;
  this.id = name + ' ' + this.latLng;

};

module.exports = Site;