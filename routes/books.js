const express = require('express'),
      router = express.Router(),
      Book = require('../models/book'),
      config = require('config'),
      jwt = require('jsonwebtoken'),
      passport = require('passport');




// export router
module.exports = router;