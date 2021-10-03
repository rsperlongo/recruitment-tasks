const express = require('express');
const router = express.Router();
const app = express()
const User = require('../model/User');

app.get('/', (req, res, next) => {
    User.find({}, (err, user) => {
        if(err) res.send(err);
        res.status(200).json(user)
    })
    
  });

module.exports = router;