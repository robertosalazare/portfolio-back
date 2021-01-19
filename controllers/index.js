const fs = require('fs');
const { Router } = require('express');

const router = Router();

const fileNames = fs.readdirSync('./controllers');

fileNames.forEach((fileName) => {
  if(!fileName.includes('index')) {

    const controller = require(`./${fileName}`);

    controller(router);
  }
});

module.exports = router;