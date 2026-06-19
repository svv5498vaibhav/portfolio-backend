const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  dsaSolved: {
    type: Number,
    default: 70
  },
  hackathonsWon: {
    type: Number,
    default: 3
  },
  totalPageViews: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Stats', statsSchema);
