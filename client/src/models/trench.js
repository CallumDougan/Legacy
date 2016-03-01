var Trench = function(site, length, breadth){
this.length = length;
this.breadth = breadth;
this.contexts = [];
this.counter = 0;
this.site = site;
this.id = undefined;

this.generateID = function(){
  this.site.trenchCounter += 1;
  this.id = this.site.id + ':' + this.site.trenchCounter;
}
};

module.exports = Trench;