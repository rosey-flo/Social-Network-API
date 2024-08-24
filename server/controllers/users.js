const { User, Thought, Reaction } = require('../models/index')

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async postNewUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteUser(req, res) {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User successfully deleted!' });
      } catch (error) {
        res.status(500).json('Please handle: ', error);
      }
    }
    //   const userId = req.params.id
    //   console.log("LLOK", userId)
    //   const user = await User.findByIdAndDelete(userId);

    //   await user.destroy();

    //   res.json({
    //     message: 'User successfully deleted'
    //   })
    // }
  }



