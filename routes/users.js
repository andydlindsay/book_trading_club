const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      config = require('config'),
      jwt = require('jsonwebtoken'),
      passport = require('passport');

// register
router.post('/register', (req, res) => {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err) => {
        if (err) {
            let errmsg = err.message;
            res.json({ success: false, msg: 'Failed to register user', errmsg });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

// authenticate
router.post('/authenticate', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) {
            return res.json({success: false, msg: err.message});
        }
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                return res.json({success: false, msg: err.message});
            }
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 60 * 60 * 24 * 7 // 1 week
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        fullName: user.fullName,
                        username: user.username
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

// profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    User.getUserById(req.user._id, (err, user) => {
        if (err) {
            return res.json({success: false, msg: err.message});
        }
        if (user) {
            res.json({
                success: true,
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    username: user.username,
                    city: user.city,
                    state: user.state
                }
            });
        } else {
            res.json({success: false, msg: 'User not found'});
        }
    });
});

// update user information
router.put('/update',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const userObj = {
            'id': req.user._id,
            'fullName': req.body.fullName,
            'city': req.body.city,
            'state': req.body.state
        }
        User.updateUser(userObj, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to update information.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, msg: 'Updated user information.' });
            } else {
                res.json({ success: false, msg: 'Failed to update information.' });
            }
        });
    }
);

// new password
router.put('/newpassword',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const userObj = {
            'id': req.user._id,
            'password': req.body.password
        }
        User.newPassword(userObj, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to update password.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, msg: 'New password saved.' });
            } else {
                res.json({ success: false, msg: 'Failed to update password.' });
            }
        });
    }
);

// export router
module.exports = router;