import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BudgetComparisonChart = ({ transactions, budgets }) => {
  const categoryExpenses = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const allCategories = [...new Set([...Object.keys(categoryExpenses), ...budgets.map(b => b.category)])];

  const budgetData = {
    labels: allCategories,
    datasets: [
      {
        label: 'Actual Spending',
        data: allCategories.map(category => categoryExpenses[category] || 0),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Budgeted Amount',
        data: allCategories.map(category => {
          const budget = budgets.find(b => b.category === category);
          return budget ? budget.amount : 0;
        }),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Budget vs. Actual Spending',
      },
    },
  };

  return <Bar data={budgetData} options={options} />;
};

export default BudgetComparisonChart;
