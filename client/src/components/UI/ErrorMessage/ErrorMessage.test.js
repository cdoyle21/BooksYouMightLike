import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import ErrorMessage from './ErrorMessage';

/**
 * Setup function for Error Message component.
 * @returns {ReactWrapper}
 */
const setup = (props = {}) => {
  return shallow(<ErrorMessage {...props} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'error-message');
  expect(component.length).toBe(1);
});
test('renders correct text', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'error-message');
  expect(component.text()).toBe('Something went wrong!');
});
