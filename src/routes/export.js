const express = require('express');
const router = express.Router();
const { db } = require('../db/db');
const { Parser } = require('json2csv');

router.get('/export-csv', async (req, res) => {
  try {
    await db.read();
    const manualEntries = db.data.manualEntries || [];
    const fields = ['id', 'designerId', 'date', 'description', 'hours', 'source'];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(manualEntries);
    res.header('Content-Type', 'text/csv');
    res.attachment('manual_entries.csv');
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export CSV' });
  }
});

module.exports = router;