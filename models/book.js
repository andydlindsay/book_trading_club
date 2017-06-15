const mongoose = require('mongoose');

// book schema
const bookSchema = mongoose.Schema({
    volumeId: {
        type: String,
        required: [true, 'Volume ID is required.']
    },
    title: {
        type: String
    },
    imageUrl: {
        type: String
    },
    ogOwner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    previousOwners: [{
        owner_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        },
        ts: {
            type: Date,
            default: Date.now
        }
    }],
    condition: {
        type: String,
        maxlength: [55, 'Condition must be 55 characters or less.'],
        minlength: [4, 'Condition must be at least 4 characters long.'],
        match: /^[a-zA-Z0-9]+$/
    },
    ownerComment: {
        type: String,
        maxlength: [55, 'Comment must be 55 characters or less.'],
        minlength: [4, 'Comment must be at least 4 characters long.'],
        match: /^[a-zA-Z0-9]+$/
    },
    timesTraded: {
        type: Number,
        default: 0
    },
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ts: {
        type: Date,
        default: Date.now
    }
});

// export book
const Book = module.exports = mongoose.model("Book", bookSchema, "books");

module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

module.exports.addBook = function(newBook, callback) {
    newBook.save(callback);
}

module.exports.getBooksByOwner = function(owner_id, callback) {
    Book.find({ owner_id: owner_id }, { title: 1, imageUrl: 1, requestedBy: 1 }, callback);
}

module.exports.removeBook = function(id, callback) {
    Book.findByIdAndRemove(id, callback);
}

module.exports.getBooks = function(itemsPerPage, currentPage, callback) {
    Book.find({}, { title: 1, imageUrl: 1, requestedBy: 1 })
        .sort({
            ts: 'desc'
        })
        .skip(itemsPerPage * currentPage)
        .limit(itemsPerPage)        
        .exec(callback);
}