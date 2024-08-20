const router = require('express').Router();
const reaction_Controller = require('../../controllers/reactions')


// POST a new reaction
router.post('/', reaction_Controller.postNewReaction)

// DELETE a reaction
router.delete('/:thoughtId/:reactionId', reaction_Controller.deleteReaction)

module.exports = router;
