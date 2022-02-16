import React from 'react';

import ExpenseForm from './ExpenseForm';

export default function AddExpense({ onAddExpense }) {
  return (
    <div className="form-body">
      <h5 className="form-title">Add Expense</h5>
      <ExpenseForm addData={onAddExpense} />
    </div>
  );
}
