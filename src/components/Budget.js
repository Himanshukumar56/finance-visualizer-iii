import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Budget = ({ transactions }) => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (transactions.length > 0) {
      setCategories([...new Set(transactions.map(t => t.category))]);
    }
  }, [transactions]);

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('/api/budgets');
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  const addBudget = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/budgets', { category, amount: parseFloat(amount), month });
      setCategory('');
      setAmount('');
      fetchBudgets();
    } catch (error) {
      console.error('Error adding budget:', error);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Set Monthly Budgets</h3>
      <form onSubmit={addBudget} className="space-y-4">
        <div className="flex space-x-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-800 text-white rounded-md px-2 py-1 w-full"
            required
          >
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))
            ) : (
              <option value="" disabled>Loading categories...</option>
            )}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="bg-gray-800 text-white rounded-md px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="bg-gray-800 text-white rounded-md px-2 py-1"
            required
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md w-full">
            Add Budget
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {budgets.map(budget => (
          <li key={budget._id} className="flex justify-between text-sm">
            <span>{budget.month} - {budget.category}</span>
            <span>₹{budget.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;
