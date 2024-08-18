const { model, Schema } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleDateString() 
    }
  });

module.exports = reactionSchema;

// const Reaction = model('Reaction', reactionSchema);

// module.exports = Reaction