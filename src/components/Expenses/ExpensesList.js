import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = <p>No Expenses Found</p>;

  if (props.items.length === 0) {
      return <h2 className="expenses-list_fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
