import styled from 'styled-components';
import theme from '../../../theme';

const LoadingSpinnerStyle = styled.div`
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerStyle>
      <div className="loading" data-test="loading-books">
        Loading tournaments ...
      </div>
    </LoadingSpinnerStyle>
  );
};

export default LoadingSpinner;
