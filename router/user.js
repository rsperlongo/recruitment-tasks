const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.get('/', async (req, res) => {
  try {
    const user = await User.find(req.body);

    return res.json(user)
  } catch (err) {
    return res.status(400).send({error: 'Cannot get user'})
  }
});

router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body);
      
      return res.send({ user })
    } catch (err) {
      return res.status(400).send({ error: 'Post failed' })
    }
});

module.exports = router;