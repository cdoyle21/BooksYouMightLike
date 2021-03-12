import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import LoadingSpinner from './LoadingSpinner';

/**
 * Setup function for Loading Spinner component.
 * @returns {ReactWrapper}
 */
const setup = (props = {}) => {
  return shallow(<LoadingSpinner {...props} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'loading-books');
  expect(component.length).toBe(1);
});
test('renders correct text', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'loading-books');
  expect(component.text()).toBe('Loading tournaments ...');
});
