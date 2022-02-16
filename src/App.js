import React, { useState } from 'react';
import './style.css';

import ShowExpenses from './components/ShowExpenses/ShowExpenses';
import AddExpense from './components/NewExpense/AddExpense';
import Wallet from './components/Wallet/Wallet';

export default function App() {
  const [expensesData, setExpensesData] = useState([]);
  const addDataHandler = (data) => {
    setExpensesData((prevData) => [
      ...prevData,
      data, // { id: Math.random().toString() },
    ]);
  };
  return (
    <>
      <h1 className="app-title">House Expenses</h1>
      <Wallet />
      <AddExpense onAddExpense={addDataHandler} />
      <ShowExpenses onShowExpense={expensesData} />
    </>
  );
}
