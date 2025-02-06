const express = require('express');
const router = express.Router();
const ManualEntry = require('../models/manualEntry');
const { db } = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const { validateManualEntry } = require('../middlewares/validation');

router.use(express.json());

// GET manual entries
router.get('/', async (req, res) => {
  try {
    await db.read();
    res.json(db.data.manualEntries);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch manual entries' });
  }
});

// POST manual entry using validation middleware
router.post('/', validateManualEntry, async (req, res) => {
  try {
    const { designerId, date, description, hours, source } = req.body;
    const newEntry = new ManualEntry({
      id: uuidv4(),
      designerId,
      date,
      description,
      hours,
      source,
    });
    await db.read();
    db.data.manualEntries.push(newEntry);
    await db.write();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create manual entry' });
  }
});

module.exports = router;