import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MonthlyExpensesChart = ({ transactions }) => {
  const monthlyExpenses = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", {
      month: "short",
    });
    acc[month] = (acc[month] || 0) + transaction.amount;
    return acc;
  }, {});

  const chartData = Object.keys(monthlyExpenses).map((month) => ({
    name: month,
    expense: monthlyExpenses[month],
  }));

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Monthly Expenses</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis dataKey="name" stroke="#E2E8F0" />
            <YAxis stroke="#E2E8F0" />
            <Tooltip
              contentStyle={{ backgroundColor: "#2D3748", border: "none" }}
              labelStyle={{ color: "#E2E8F0" }}
            />
            <Legend wrapperStyle={{ color: "#E2E8F0" }} />
            <Bar dataKey="expense" fill="#4299E1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyExpensesChart;
