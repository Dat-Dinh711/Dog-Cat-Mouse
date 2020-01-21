function Dog2() {
    this.stomach = [];
}

Dog2.prototype.eat = function(cat) {
    this.stomach.push(cat);
}