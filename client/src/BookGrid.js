import React from 'react';
import 'whatwg-fetch';

import Container from './components/UI/Container';
import BookList from './components/Books/BookList/BookList';
import H4 from './components/UI/HTags/H4/H4';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';
import ErrorMessage from './components/UI/ErrorMessage/ErrorMessage';
import hookActions from './actions/hookActions';

export const BookGrid = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    hookActions.getData(setError, setData, setLoading);
  }, []);

  let errorMessage = null;
  if (error) {
    errorMessage = <ErrorMessage data-test="error-test" />;
  }

  let books = <LoadingSpinner data-test="loading-spinner" />;
  if (!loading) {
    books = (
      <div>
        <H4 data-test="H4">Books You Might Like:</H4>
        <BookList data={data} />
      </div>
    );
  }

  return (
    <Container>
      {errorMessage}
      {books}
    </Container>
  );
};

export default BookGrid;
