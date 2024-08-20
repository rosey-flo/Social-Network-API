const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
});

// Virtual for friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', userSchema);

module.exports = User