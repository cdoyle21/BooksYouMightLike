import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from './tests/testUtils';
import BookGrid from './BookGrid';
import hookActions from './actions/hookActions';

const mockGetData = jest.fn();

/**
 * Setup function for BookGrid Component
 * @param {object} testValues - mockData, mockError and mockLoading for this specific test.
 * @param {boolean} - mockError for this specific test
 * @param {boolean} - mockLoading for this specific test
 * @returns {ReactWrapper}
 */
const setup = () => {
  mockGetData.mockClear();
  hookActions.getData = mockGetData;

  return mount(<BookGrid />);
};

/**
 * Create ReactWrapper for data for testing
 * @returns {ReactWrapper} - Wrapper for data
 */
describe('getData calls', () => {
  test('getData gets called on BookGrid mount', () => {
    setup();

    expect(mockGetData).toHaveBeenCalled();
  });
  test('getData does not update on BookGrid update', () => {
    const wrapper = setup();
    mockGetData.mockClear();

    wrapper.setProps();
    expect(mockGetData).not.toHaveBeenCalled();
  });
});

/**
 * Create ReactWrapper for error message and loading spinner for testing
 * @returns {ReactWrapper} - Wrapper for error message and loading spinner
 */
describe('state controlled error message and loading spinner', () => {
  test('correctly renders error message', () => {
    const mockSetError = jest.fn();
    React.useState = jest.fn(() => [true, mockSetError]);

    const wrapper = setup();
    const errorMessage = findByTestAttr(wrapper, 'error-test');

    expect(errorMessage.length).toBe(1);
  });
  test('correctly renders loading spinner', () => {
    const mockSetLoading = jest.fn();
    React.useState = jest.fn(() => [true, mockSetLoading]);

    const wrapper = setup();
    const loadingSpinner = findByTestAttr(wrapper, 'loading-spinner');

    expect(loadingSpinner.length).toBe(1);
  });
});
