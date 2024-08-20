const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Reaction = require('./Reaction');

const thoughtSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [Reaction.schema]
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  

const Thought = model('Thought', thoughtSchema);

module.exports = Thought