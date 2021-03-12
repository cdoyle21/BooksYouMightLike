import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import Book from './Book';

const defaultProps = {
  title: 'Learning BeagleBone Python Programming',
  contributor: 'Alexander Hiam',
  location: 'books/RM_Books/packtpub/',
  coverFile: '781784399702.jpg',
};

/**
 * Setup function for Book component.
 * @returns {ReactWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Book {...setupProps} />);
};

describe('items render correctly', () => {
  test('renders article without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'article');
    expect(component.length).toBe(1);
  });
  test('renders image tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'image');
    expect(component.length).toBe(1);
  });
  test('renders H5 tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'H5');
    expect(component.length).toBe(1);
  });
  test('renders H6 tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'H6');
    expect(component.length).toBe(1);
  });
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    title: 'Learning BeagleBone Python Programming',
    contributor: 'Alexander Hiam',
    location: 'books/RM_Books/packtpub/',
    coverFile: '781784399702.jpg',
  };
  checkProps(Book, expectedProps);
});
