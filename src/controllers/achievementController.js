const Achievement = require('../models/Achievement');

// Get all achievements sorted by rank/importance
exports.getAchievements = async (req, res, next) => {
  try {
    const achievements = await Achievement.find().sort({ rank: 1, dateString: -1 });
    res.status(200).json({
      success: true,
      count: achievements.length,
      data: achievements
    });
  } catch (error) {
    next(error);
  }
};
