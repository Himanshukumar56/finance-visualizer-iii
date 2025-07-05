import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import MonthlyExpensesChart from './components/MonthlyExpensesChart';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import BudgetComparisonChart from './components/BudgetComparisonChart';
import SpendingInsights from './components/SpendingInsights';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsResponse, budgetsResponse] = await Promise.all([
          axios.get('/api/transactions'),
          axios.get('/api/budgets')
        ]);
        setTransactions(transactionsResponse.data);
        setBudgets(budgetsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Personal Finance Visualizer</h1>
      </header>
      <main className="space-y-8">
        <Dashboard transactions={transactions} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <TransactionForm onTransactionAdded={() => {
              const fetchData = async () => {
                try {
                  const transactionsResponse = await axios.get('/api/transactions');
                  setTransactions(transactionsResponse.data);
                } catch (error) {
                  console.error("Error fetching data:", error);
                }
              };
              fetchData();
            }} />
            <Budget transactions={transactions} />
          </div>
          <div className="md:col-span-2 space-y-8">
            <TransactionList transactions={transactions} setTransactions={setTransactions} />
            <MonthlyExpensesChart transactions={transactions} />
            <BudgetComparisonChart transactions={transactions} budgets={budgets} />
            <SpendingInsights transactions={transactions} budgets={budgets} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
