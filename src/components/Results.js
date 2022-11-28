import PropTypes from 'prop-types';
import '../styles/results.scss';

const Results = ({ results }) => {
  return (
    <div className="search-results">
      <p className="search-results__title">Search results</p>

      <div>{results ? results.map(() => {}) : <p>Enter a search term to view results</p>}</div>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.array
};

export default Results;
