import React from 'react';

import ExpensesList from './ExpensesList';

export default function ShowExpenses({ expensesData }) {
  return (
    <ul>
      {expensesData.map((item) => (
        <ExpensesList key={item.id} item={item} />
      ))}
    </ul>
  );
}
