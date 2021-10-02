const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/recruitment-tasks'

mongoose.connect(url).then(() => console.log('connection successful')).catch((err) => console.log(console.error(err)));

const UserRouter = require('./router/user');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/user', UserRouter);

app.listen(3000);

module.exports = app;


