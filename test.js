console.log('test')

var Pouch = require('pouchdb')


var User = function(name){
  this.name = name
};

var user = new User('barry');

var getUserName = function(user){
  return user.name;
}

getUserName(user).then(function(user){
  console.log(user)
})