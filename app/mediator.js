function Mediator() {
  this._elements = {};

  this.addElement = (fn) => {
    this.elements[fn.name] = fn;
  }

  this.getElement = (key) => {
    return this.elements[key];
  }
}

const mediator = new Mediator();

module.exports = mediator;