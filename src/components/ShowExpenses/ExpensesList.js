import React from 'react';

export default function ExpensesList({ item }) {
  const { title, amount, date, payment_mode } = item;
  return (
    <>
      <li>
        <h6>{title}</h6>
        <h6>{amount}</h6>
        <span>{date}</span>
        <span>{payment_mode}</span>
      </li>
    </>
  );
}
