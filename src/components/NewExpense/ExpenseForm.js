import React, { useState } from 'react';

export default function ExpenseForm({ addData }) {
  //Form Inputs State
  const [formInputs, setFormInputs] = useState({
    title: '',
    amount: '',
    date: '',
    payment_mode: '',
  });

  //Form Change Handler
  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  //Submit Form Handler
  const submitFormHandler = (event) => {
    event.preventDefault();

    //Pass Form Data to AddExpense.js
    addData(formInputs);

    //Clear Input Fields after Submission
    setFormInputs({
      title: '',
      amount: '',
      date: '',
      payment_mode: '',
    });
  };

  console.log(formInputs);

  return (
    <form className="form" onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          value={formInputs.title}
          onChange={formChangeHandler}
          type="text"
          className="form-control"
          name="title"
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          value={formInputs.amount}
          onChange={formChangeHandler}
          type="number"
          className="form-control"
          name="amount"
          placeholder="Amount"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          value={formInputs.date}
          onChange={formChangeHandler}
          type="date"
          className="form-control"
          name="date"
          placeholder="Date"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="payment mode" className="form-label">
          Payment Mode
        </label>
        <select
          name="payment_mode"
          className="form-control"
          value={formInputs.payment_mode}
          onChange={formChangeHandler}
        >
          <option value="cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Paytm">Paytm</option>
          <option value="Phonepe">Phonepe</option>
        </select>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-success btn-sm">
          <i className="fa fa-plus mr5" />
          Add
        </button>
      </div>
    </form>
  );
}
