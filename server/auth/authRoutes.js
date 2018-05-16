const router = require('express').Router();

const User = require('../users/userSchema');

router.post('/register', function(req, res) {
  console.log('posting', req.body);
  User.create(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;