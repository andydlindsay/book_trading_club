const express = require('express'),
      router = express.Router(),
      Book = require('../models/book'),
      passport = require('passport');

router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newBook = new Book({
            volumeId: req.body.volumeId,
            title: req.body.title,
            images: {
                smallUrl: req.body.smallUrl,
                smallThumbnailUrl: req.body.smallThumbnailUrl
            },
            owner_id: req.user._id,
            previousOwners: [{
                owner_id: req.user._id,
                username: req.user.username
            }]
        });
        Book.addBook(newBook, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to add book.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, msg: 'Book saved.' });
            } else {
                res.json({ success: false, msg: 'Failed to add book.' });
            }
        });
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const bookId = req.params.id;
        Book.removeBook(bookId, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to delete book.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, doc, msg: 'Book deleted.' });
            } else {
                res.json({ success: false, msg: 'Failed to delete book.' });
            }
        });
    }
);

router.get('/:id', (req, res) => {
    const bookId = req.params.id;
    Book.getBookById(bookId, (err, doc) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to find book.', errmsg: err.message });
        } else if (doc) {
            res.json({ success: true, book: doc });
        } else {
            res.json({ success: false, msg: 'Failed to find book.' });
        }
    });
});

router.get('/', (req, res) => {
    const itemsPerPage = req.query.itemsperpage;
    const currentPage = req.query.currentpage;
    const availableOnly = req.query.availableonly;
    Book.getBooks(itemsPerPage, currentPage, availableOnly, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get books.', errmsg: err.message });
        } else if (docs) {
            res.json({ success: true, books: docs });
        } else {
            res.json({ success: false, msg: 'Failed to get books.' });
        }
    });
});

router.get('/byowner/:id', (req, res) => {
    const ownerId = req.params.id;
    Book.getBooksByOwner(ownerId, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get books.', errmsg: err.message });
        } else if (docs) {
            res.json({ success: true, books: docs });
        } else {
            res.json({ success: true, msg: 'Failed to get books.' });
        }
    });
});

router.put('/:id/request',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const requester_id = req.user._id;
        const requester_username = req.user.username;
        const book_id = req.params.id;
        Book.requestBook(book_id, requester_id, requester_username, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to request book.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, msg: 'Book requested.' });
            } else {
                res.json({ success: false, msg: 'Failed to request book.' });
            }
        });
    }
);

router.put('/:id/cancelrequest',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const book_id = req.params.id;
        Book.cancelRequest(book_id, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to cancel request.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, msg: 'Cancelled request.' });
            } else {
                res.json({ success: false, msg: 'Failed to cancel request.' });
            }
        });
    }
);

router.put('/:id/trade',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const book_id = req.params.id;
        Book.tradeBook(book_id, (err, doc) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to trade book.', errmsg: err.message });
            } else if (doc) {
                res.json({ success: true, msg: 'Book traded.' });
            } else {
                res.json({ success: false, msg: 'Failed to trade book.' });
            }
        });
    }
);

// export router
module.exports = router;