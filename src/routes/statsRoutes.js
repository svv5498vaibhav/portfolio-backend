const express = require('express');
const router = express.Router();
const { getStats, incrementPageViews } = require('../controllers/statsController');

router.get('/', getStats);
router.post('/view', incrementPageViews);

module.exports = router;
