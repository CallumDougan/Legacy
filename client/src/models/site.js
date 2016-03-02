var Site = function(name, lat, lng){
  this.trenchCounter = 0;
  this.name = name;
  this.latLng = lat + '-' + lng;
  this.id = name + ' ' + this.latLng;

  this.define = function(){
    
  }
};

module.exports = Site;