const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Achievement title is required'],
    trim: true
  },
  organization: {
    type: String,
    required: [true, 'Awarding organization is required'],
    trim: true
  },
  dateString: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Achievement description is required']
  },
  category: {
    type: String,
    enum: ['hackathon', 'startup', 'quiz', 'academic', 'other'],
    default: 'other'
  },
  rank: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Achievement', achievementSchema);
