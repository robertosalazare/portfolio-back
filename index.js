const express = require('express');
const dynamoose = require("dynamoose");
const router = require('./controllers');
const bodyParser = require('body-parser')
const dotnev = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotnev.config();

const app = express();
const PORT = process.env.PORT;

dynamoose.aws.ddb.local('http://localhost:8000');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running in port ${PORT}`);
});