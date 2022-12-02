// import and instantiate express
const express = require('express'); // CommonJS import style!
const cors = require('cors');
const app = express(); // instantiate an Express object

// import some useful middleware
// require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require('morgan'); // middleware for nice logging of incoming HTTP requests

/**
 * Typically, all middlewares would be included before routes
 * In this file, however, most middlewares are after most routes
 * This is to match the order of the accompanying slides
 */
app.use(cors());
// use the morgan middleware to log all incoming http requests
app.use(morgan('dev')); // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json({ limit: '10mb' })); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ limit: '10mb', extended: true })); // decode url-encoded incoming POST data

//code goes here

app.use('/api', routes);

// export the app object so it can be used in other modules
module.exports = app;
