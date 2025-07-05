import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import MonthlyExpensesChart from './components/MonthlyExpensesChart';
import Dashboard from './components/Dashboard';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    axios.get('/api/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Personal Finance Visualizer</h1>
      </header>
      <main className="space-y-8">
        <Dashboard transactions={transactions} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TransactionForm onTransactionAdded={fetchTransactions} />
          </div>
          <div className="md:col-span-2 space-y-8">
            <TransactionList transactions={transactions} setTransactions={setTransactions} />
            <MonthlyExpensesChart transactions={transactions} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
