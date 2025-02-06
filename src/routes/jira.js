const express = require('express');
const { query, validationResult } = require('express-validator');
const router = express.Router();

// GET dummy Jira tickets
router.get('/tickets',
  [
    query('project').notEmpty().withMessage('Project ID is required'),
    query('since').optional().isISO8601().withMessage('Invalid date format (use YYYY-MM-DD)')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      const dummyTickets = [
        { id: 1, ticketNumber: 'JIRA-101', description: 'Fix login bug', status: 'open' },
        { id: 2, ticketNumber: 'JIRA-102', description: 'Update user profile UI', status: 'in progress' },
        { id: 3, ticketNumber: 'JIRA-103', description: 'Improve performance of dashboard', status: 'closed' }
      ];
      res.json(dummyTickets);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

module.exports = router;