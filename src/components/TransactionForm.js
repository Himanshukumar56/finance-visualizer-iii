import React, { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';

const TransactionForm = ({ onTransactionAdded }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('General');
  const today = new Date().toISOString().split('T')[0];
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      description,
      amount,
      date,
      category,
    };

    axios.post('/api/transactions/add', newTransaction)
      .then(res => {
        console.log(res.data);
        onTransactionAdded();
      });

    setDescription('');
    setAmount('');
    setDate('');
    setCategory('General');
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add Transaction</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Coffee, Lunch, etc."
            required
            className="bg-gray-700 border-gray-600"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="bg-gray-700 border-gray-600 text-white p-2 rounded-md w-full"
          >
            <option value="General">General</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in Rupees"
            required
            className="bg-gray-700 border-gray-600"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            max={today}
            onChange={(e) => setDate(e.target.value)}
            required
            className="bg-gray-700 border-gray-600"
          />
        </div>
        <Button type="submit" className="w-full">Add Transaction</Button>
      </form>
    </div>
  );
};

export default TransactionForm;
