import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const submitExpenseHandler = (enteredExpenseData) => {
    const expense_data = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSubmitExpenseForm(expense_data)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={submitExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
