const router = require('express').Router();
const user_controller = require('../../controllers/users')
//////Users

// GET all users
router.get('/users', user_controller.getAllUsers)

// GET a single user by _id
router.get('/users/:id', user_controller.getUserById)

// POST a new user
router.post('/users', user_controller.postNewUser);

// PUT to update a user by _id
router.put('/users/:id', user_controller.updateUser)

// DELETE a user by _id
router.delete('/users/:id', user_controller.deleteUser);

module.exports = router;