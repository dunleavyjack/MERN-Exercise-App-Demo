const router = require('express').Router();
let User = require('../models/user.model')

// Handles get requests from '/' and returns list of users from database
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

// Handles incoming post requests to save new users
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// Standard for these kind of files
module.exports = router;