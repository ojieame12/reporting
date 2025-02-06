const express = require('express');
const router = express.Router();
const { db } = require('../db/db');
const { query, validationResult } = require('express-validator');
const { validateAnalyticsDates } = require('../middlewares/validation');

router.get('/summary', validateAnalyticsDates, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    await db.read();
    const manualEntries = db.data.manualEntries || [];
    const totalEntries = manualEntries.length;
    const totalHours = manualEntries.reduce(
      (sum, entry) => sum + Number(entry.hours),
      0
    );
    res.json({ totalEntries, totalHours });
  } catch (error) {
    res.status(500).json({ error: 'Unable to calculate analytics' });
  }
});

module.exports = router;