const Stats = require('../models/Stats');

// Get aggregate stats
exports.getStats = async (req, res, next) => {
  try {
    let stats = await Stats.findOne();
    
    // Seed initial stats if not found
    if (!stats) {
      stats = await Stats.create({
        dsaSolved: 70,
        hackathonsWon: 3,
        totalPageViews: 0
      });
    }

    res.status(200).json({
      success: true,
      data: {
        dsaSolved: stats.dsaSolved,
        hackathonsWon: stats.hackathonsWon,
        totalPageViews: stats.totalPageViews
      }
    });
  } catch (error) {
    next(error);
  }
};

// Increment page views
exports.incrementPageViews = async (req, res, next) => {
  try {
    let stats = await Stats.findOneAndUpdate(
      {},
      { $inc: { totalPageViews: 1 } },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      data: {
        totalPageViews: stats.totalPageViews
      }
    });
  } catch (error) {
    next(error);
  }
};
