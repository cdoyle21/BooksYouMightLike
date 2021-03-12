import { checkProps } from '../../../tests/testUtils';
import BookList from './BookList';

/**
 * Expected props for BookList component.
 * @returns {ReactWrapper}
 */
test('does not throw warning with expected props', () => {
  const expectedProps = {
    title: 'Learning BeagleBone Python Programming',
    contributor: 'Alexander Hiam',
    location: 'books/RM_Books/packtpub/',
    coverFile: '781784399702.jpg',
    data: [],
  };
  checkProps(BookList, expectedProps);
});
