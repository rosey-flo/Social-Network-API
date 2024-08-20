const router = require('express').Router();

const reaction_routes = require('./api_routes/reaction_routes');
const thought_routes = require('./api_routes/thought_routes');
const user_routes = require('./api_routes/user_routes');



router.use('/', [
  reaction_routes,
  user_routes,
  thought_routes
]);



module.exports = router;