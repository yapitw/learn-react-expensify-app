import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    {expensesCount !== 0 && (
      <h3>
        Viewing {expensesCount} expense{expensesCount > 1 && 's'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}
      </h3>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  expenses: selectExpense(state.expenses, state.filters),
  expensesTotal: expensesTotal(state.expenses),
  expensesCount: state.expenses.length
});

export default connect(mapStateToProps)(ExpensesSummary);