const express = require('express');
const dynamoose = require("dynamoose");
const router = require('./controllers');

const app = express();
const PORT = 3000;

dynamoose.aws.ddb.local();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});