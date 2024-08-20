const router = require('express').Router();
const user_controller = require('../../controllers/users')
//////Users

// GET all users
router.get('/', user_controller.getAllUsers)

// GET a single user by _id
router.get('/:id', user_controller.getUserById)

// POST a new user
router.post('/', user_controller.postNewUser);

// PUT to update a user by _id
router.put('/:id', user_controller.updateUser)

// DELETE a user by _id
router.delete('/:id', user_controller.deleteUser);

module.exports = router;