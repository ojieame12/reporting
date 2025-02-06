const express = require('express');
const { query, validationResult } = require('express-validator');
const router = express.Router();

router.get('/activity',
  [
    query('userId').notEmpty().isUUID().withMessage('Valid user ID required'),
    query('startDate').isISO8601().withMessage('Invalid start date format')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      const dummyActivity = [
        { id: 1, activity: 'Design review completed', timestamp: new Date().toISOString() },
        { id: 2, activity: 'Prototype updated', timestamp: new Date().toISOString() },
        { id: 3, activity: 'Feedback received', timestamp: new Date().toISOString() }
      ];
      res.json(dummyActivity);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

module.exports = router;