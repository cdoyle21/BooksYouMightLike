import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

import styled from 'styled-components';
import theme from '../../../theme';

const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (min-width: 25.9em) {
    grid-template-columns: repeat(6, 1fr);
  }
  grid-gap: ${theme.spacing(13)};
  padding: ${theme.spacing(6)} 0;
`;

const BookList = (props) => {
  const bookNodes = props.data.map((book) => (
    <Book
      title={book.Title_DistinctivetitlebookCovertitle_TitleText}
      contributor={book.Contributor1_PersonName}
      key={book.id}
      location={book.Location}
      coverFile={book.Cover_File}
    />
  ));
  return <BookListStyle>{bookNodes}</BookListStyle>;
};

BookList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      contributor: PropTypes.string,
      location: PropTypes.string,
      coverFile: PropTypes.string,
    })
  ),
};

BookList.defaultProps = {
  data: [],
};

export default BookList;
