const {User, Thought, Reaction} = require('../models/index')

module.exports = {
  async getAllThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
},
async getThoughtById(req, res) {
  try {
    const thought = await Thought.findById(req.params.id)
      .populate('reactions');
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},
async postNewThought(req, res) {
  try {
    const newThought = await Thought.create(req.body);
    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }

},
async updateThoughtById(req, res) {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
},
async deleteThought(req, res) {
  try {
    const result = await Thought.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
}}


