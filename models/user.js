const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs');

// User schema
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        maxlength: [35, 'Name must be 35 characters or less.'],
        minlength: [3, 'Name must be at least 3 characters long.'],
        match: /^[a-zA-Z0-9\s]+$/
    },
    username: {
        type: String,
        maxlength: [25, 'Username must be 25 characters or less.'],
        minlength: [4, 'Username must be at least 4 characters long.'],
        match: /^[a-zA-Z0-9]+$/,
        required: [true, 'Username is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is a required.']
    },
    city: {
        type: String,
        match: /^[a-zA-Z0-9\s]+$/
    },
    state: {
        type: String,
        match: /^[a-zA-Z0-9\s]+$/
    },
    ts: {
        type: Date,
        default: Date.now
    }
});

// export user
const User = module.exports = mongoose.model("User", userSchema, "users");

module.exports.updateUser = function(userObj, callback) {
    const user_id = userObj.id;
    User.findByIdAndUpdate(user_id,
    {
        'fullName': userObj.fullName,
        'city': userObj.city,
        'state': userObj.state
    }, callback);
};

module.exports.newPassword = function(userObj, callback) {
    const user_id = userObj.id;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userObj.password, salt, (err, hash) => {
            if (err) throw err;
            const newPassword = hash;
            User.findByIdAndUpdate(user_id,
            {
                'password': newPassword
            }, callback);
        });
    });
    
};

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
    const query = { username };
    User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function(password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};