const express = require('express');
const mongoose = require("mongoose");
const router = require('./controllers');
const bodyParser = require('body-parser')
const dotnev = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// config dotenv
dotnev.config();

// config mongoose
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running in port ${PORT}`);
});