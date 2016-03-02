var Trench = function(site, length, breadth){
this.length = length;
this.breadth = breadth;
this.contexts = [];
this.site = site;
this.id = undefined;
this.contextCounter = 0;

this.generateID = function(){
  this.site.trenchCounter += 1;
  this.id = this.site.id + ':' + this.site.trenchCounter;
};

this.addContext = function(context){
this.contexts.push(context);
};

};

module.exports = Trench;