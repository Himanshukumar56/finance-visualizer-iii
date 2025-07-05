const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// @route   GET api/budgets
// @desc    Get all budgets
// @access  Public
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.find().sort({ createdAt: -1 });
    res.json(budgets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/budgets
// @desc    Add a new budget
// @access  Public
router.post('/', async (req, res) => {
  const { category, amount, month } = req.body;

  try {
    const newBudget = new Budget({
      category,
      amount,
      month
    });

    const budget = await newBudget.save();
    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
