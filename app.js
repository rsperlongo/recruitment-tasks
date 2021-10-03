const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/recruitment-tasks'

mongoose.connect(url, { useNewUrlParser: true }).then(() => console.log('connection successful')).catch((err) => console.log(console.error(err)));


const app = express();
const usersRouter = require('./router/user');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', usersRouter);

app.listen(3000);

module.exports = app;


