import React from 'react';
import axios from 'axios';

const TransactionList = ({ transactions, setTransactions }) => {
  const deleteTransaction = (id) => {
    axios.delete('http://localhost:5000/transactions/'+id)
      .then(response => { console.log(response.data)});

    setTransactions(transactions.filter(el => el._id !== id))
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Logged Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="py-3 px-4">{transaction.description}</td>
                <td className="py-3 px-4">₹{transaction.amount.toFixed(2)}</td>
                <td className="py-3 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => deleteTransaction(transaction._id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
