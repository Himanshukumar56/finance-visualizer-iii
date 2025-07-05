import React from 'react';
import CategoryPieChart from './CategoryPieChart';

const Dashboard = ({ transactions }) => {
  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const categoryExpenses = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-1">Total Expenses</h3>
        <p className="text-2xl font-bold">₹{totalExpenses.toFixed(2)}</p>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-1">Category Breakdown</h3>
        <CategoryPieChart transactions={categoryExpenses} />
      </div>
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-2">Recent Transactions</h3>
        <ul className="space-y-2">
          {recentTransactions.map(transaction => (
            <li key={transaction._id} className="flex justify-between text-sm">
              <span>{transaction.description}</span>
              <span>₹{transaction.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
