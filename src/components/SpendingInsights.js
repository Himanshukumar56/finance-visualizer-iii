import React from 'react';

const SpendingInsights = ({ transactions, budgets }) => {
  const categoryExpenses = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const insights = budgets.map(budget => {
    const spent = categoryExpenses[budget.category] || 0;
    const difference = budget.amount - spent;
    const status = difference >= 0 ? 'Under Budget' : 'Over Budget';
    return { ...budget, spent, difference, status };
  });

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Spending Insights</h3>
      <ul className="space-y-2">
        {insights.map(insight => (
          <li key={insight._id} className="flex justify-between text-sm">
            <span>{insight.category}</span>
            <span className={insight.status === 'Under Budget' ? 'text-green-500' : 'text-red-500'}>
              {insight.status} by ₹{Math.abs(insight.difference).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingInsights;
