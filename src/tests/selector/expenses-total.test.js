import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = expensesTotal([]);
  expect(result).toBe(0)
});


test('should correctly add up a single expense', () => {
  const result = expensesTotal([expenses[1]]);
  expect(result).toBe(expenses[1].amount);
});


test('should correctly add up multiple expenses', () => {
  const result = expensesTotal(expenses);
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  expect(result).toBe(total);
});