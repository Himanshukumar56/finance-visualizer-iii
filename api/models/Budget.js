const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Budget', BudgetSchema);
