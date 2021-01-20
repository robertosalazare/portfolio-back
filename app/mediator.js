const fs = require('fs');
const { resolve } = require('path');

function readDirSyncRecursive(dir, results = []) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
  
    if (dirent.isDirectory()) {
      readDirSyncRecursive(res, results);
    } else {
      results.push(res);
    }
  }
}

function Mediator() {
  this._elements = {};

  this.addElement = (fn) => {
    this._elements[fn.name] = fn;
  }

  this.getElement = (key) => {
    return this._elements[key];
  }

  const files = [];

  readDirSyncRecursive(__dirname, files);

  files.forEach(file => {
    const fileName = file.split('/').pop();

    if(!fileName.includes('mediator')) {
      const fn = require(file);
      this.addElement(fn);
    }
  });
}

const mediator = new Mediator();

module.exports = mediator;