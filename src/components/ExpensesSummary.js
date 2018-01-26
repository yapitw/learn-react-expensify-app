import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpense from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expensesCount} {expensesWord} totalling {formatedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpense(state.expenses, state.filters);
  return {
    expensesTotal: expensesTotal(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
}

export default connect(mapStateToProps)(ExpensesSummary);