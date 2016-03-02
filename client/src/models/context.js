var Context = function(trench){
this.id = undefined;
this.trench = trench;


this.generateID = function(){
  this.trench.contextCounter += 1;
  this.id = this.trench.id + ':C' + this.trench.contextCounter;
}
};

module.exports = Context;