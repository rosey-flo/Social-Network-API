const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const api_routes = require('./routes/api_routes');

// Load our routes
app.use('/api', api_routes);


const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/social_media_db';

app.use(bodyParser.json());




mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));