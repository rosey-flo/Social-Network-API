require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors'); // Enable CORS
const db = require('./config/connection');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3333;

const api_routes = require('./routes/index');

app.use(cors()); // Enable CORS
app.use(bodyParser.json());


// Add the JSON middleware / Allow JSON to be attached to req.body
app.use(express.json());


// Load our routes
app.use('/api', api_routes)


db.once('open', () => {
  console.log('DB connection established');
  
  // Start express server
  app.listen(PORT, () => {
    console.log('Express server started on port', PORT);
  })
});



  // // Send back the index.html file for all other requests/routes
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../client/index.html'));
  // });