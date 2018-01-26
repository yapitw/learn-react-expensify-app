import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary correctly with single expense data', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount="1" expensesTotal="9434" />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multi expenses data', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount="2" expensesTotal="9434" />);
  expect(wrapper).toMatchSnapshot();
});
