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
    images: {
        smallUrl: {
            type: String
        },
        smallThumbnailUrl: {
            type: String
        }
    },
    owner: {
        owner_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        }
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
        requester_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        }
    },
    available: {
        type: Boolean,
        default: true
    },
    ts: {
        type: Date,
        default: Date.now
    }
});

// export book
const Book = module.exports = mongoose.model("Book", bookSchema, "books");

module.exports.tradeBook = function(book_id, callback) {
    Book.findById(book_id, { 'requestedBy.requester_id': 1, 'requestedBy.username': 1 }, (err, doc) => {
        if (err) {
            console.error(err);
            callback(err);
        } else if (doc) {
            if (doc.requestedBy.requester_id != null) {
                const prevOwner = {
                    owner_id: doc.requestedBy.requester_id,
                    username: doc.requestedBy.username
                }
                Book.findOneAndUpdate({ '_id': book_id },
                    {
                        'owner.owner_id': doc.requestedBy.requester_id,
                        'owner.username': doc.requestedBy.requester_username,
                        'requestedBy.requester_id': null,
                        'requestedBy.username': null,
                        'available': true,
                        $inc: { 'timesTraded': 1 },
                        $push: { 'previousOwners': prevOwner } 
                    }, callback);
            } else {
                callback();
            }
        } else {
            callback();
        }
    });
}

module.exports.requestBook = function(book_id, requester_id, requester_username, callback) {
    const requesterObj = {
        'requester_id': requester_id,
        'username': requester_username
    }
    Book.findOneAndUpdate({ '_id': book_id },
        {
            'requestedBy': requesterObj,
            'available': false
        }, callback);
}

module.exports.cancelRequest = function(book_id, callback) {
    Book.findOneAndUpdate({ '_id': book_id },
        {
            'requestedBy.username': null,
            'requestedBy.requester_id': null,
            'available': true
        }, callback);
}

module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

module.exports.addBook = function(newBook, callback) {
    newBook.save(callback);
}

module.exports.getBooksByOwner = function(owner_id, callback) {
    Book.find({ 'owner.owner_id': owner_id }, { title: 1, images: 1, available: 1 })
        .sort({ title: 'asc' })
        .exec(callback);
}

module.exports.removeBook = function(id, callback) {
    Book.findByIdAndRemove(id, callback);
}

module.exports.getBooks = function(itemsPerPage, currentPage, availableOnly, callback) {
    let query = {};
    if (availableOnly) {
        query.available = true;
    }
    const currPage = Number(currentPage) || 1;
    Book.find(query, { title: 1, images: 1, available: 1 })
        .sort({ ts: 'desc' })
        .skip(Number(itemsPerPage) * (currPage - 1))
        .limit(Number(itemsPerPage))        
        .exec(callback);
}
