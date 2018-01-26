import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary correctly with single expense data', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal="9434" />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses data', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={32} expensesTotal="98327493247" />);
  expect(wrapper).toMatchSnapshot();
});
