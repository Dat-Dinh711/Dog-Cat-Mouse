var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Thành');
var cat = new Cat();
var mouse = new Mouse('Jerry');

cat.eat(mouse);
dog.eat(cat);

console.log(dog, cat);