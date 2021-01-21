const fs = require('fs');
const { resolve } = require('path');
const Ajv = require("ajv").default
const ajv = new Ajv();

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

  this._addElement = (fn, schema) => {
    const validate = schema ? ajv.compile(schema) : null;

    this._elements[fn.name] = {
      handler: fn,
      validate,
    };
  }

  this.getElement = (key) => {
    return this._elements[key];
  }

  const files = [];

  readDirSyncRecursive(__dirname, files);

  files.forEach(file => {
    const fileName = file.split('/').pop();

    if(fileName.includes('.handler.js')) {
      const name = fileName.split('.')[0];
      let schema = null;
      let dir = file.split('/');
      dir.pop();
      dir = dir.join('/');

      const validationDir = `${dir}/${name}.validation.js`;

      if(fs.existsSync(validationDir)) {
        schema = require(validationDir);
      }

      const fn = require(file);
      this._addElement(fn, schema);
    }
  });
}

const mediator = new Mediator();

module.exports = mediator;