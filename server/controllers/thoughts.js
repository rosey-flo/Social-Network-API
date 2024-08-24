const {User, Thought, Reaction} = require('../models/index')

module.exports = {
  async getAllThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json(error);
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
  } catch (error) {
    res.status(500).json(error);
  }
},
async postNewThought(req, res) {
  try {
    const newThought = await Thought.create(req.body);
    res.json(newThought);
  } catch (error) {
    res.status(500).json(error);
  }

},
async updateThoughtById(req, res) {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (error) {
    res.status(500).json(error);
  }
},
async deleteThought(req, res) {
  try {
    const result = await Thought.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
}}


