import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <Card className="expenses">
      {props.items.map(item => (
         <ExpenseItem
         title={item.title}
         amount={item.amount}
         date={item.date}
       />
      ))}
    </Card>
    </div>

  );
}

export default Expenses;
