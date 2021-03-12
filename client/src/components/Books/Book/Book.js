import React from 'react';
import PropTypes from 'prop-types';

import H5 from '../../UI/HTags/H5/H5';
import H6 from '../../UI/HTags/H6/H6';

import styled from 'styled-components';

const BookStyle = styled.div`
  img {
    width: 100%;
  }
`;

const Book = (props) => (
  <BookStyle>
    <article data-test="article">
      <img
        alt="user_image"
        className="userImage"
        data-test="image"
        src={`https://www.perlego.com/${props.location}/${props.coverFile}`}
      />
      <H5 data-test="H5">{props.title}</H5>
      <H6 data-test="H6">{props.contributor}</H6>
    </article>
  </BookStyle>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  coverFile: PropTypes.string.isRequired,
};

export default Book;
