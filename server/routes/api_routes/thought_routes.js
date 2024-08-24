const router = require('express').Router();
const thought_controller = require('../../controllers/thoughts')
////////////Thoughts

// GET all thoughts
router.get('/thoughts', thought_controller.getAllThoughts)

// GET a single thought by _id
router.get('/thoughts/:id', thought_controller.getThoughtById)

// POST a new thought
router.post('/thoughts', thought_controller.postNewThought)

// PUT to update a thought by _id
router.put('/:id', thought_controller.updateThoughtById)

// DELETE a thought by _id
router.delete('/thoughts/:id', thought_controller.deleteThought)

module.exports = router;