const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


// Always require and configure near the top 
require('dotenv').config();

// Connect to the database
require('./config/database');
const app = express();

app.use(logger('dev'));
app.use(express.json());


// STRIPE
// for localhost testing
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
// for deployment
// const stripe = require('stripe')(pk_test_51KQxaQIdi9UJJW0jgeryB73SUH4nyfRmUJhUe8K7yzLMldAVoRy1sUer59afoyu9e9gIxZaF3X17jeLpWXIYSP7W00WSlzEpWW);


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/orders', require('./routes/api/orders'));
app.use('/create-checkout-session', require('./routes/api/payments'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});