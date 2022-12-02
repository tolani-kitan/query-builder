import PropTypes from 'prop-types';
import formatDate from '../helpers/date';
import '../styles/results.scss';
// import Pagination from './Pagination';

const Results = ({ results }) => {
  console.log('results', results);
  return (
    <div className="search-results">
      <p className="search-results__title">Search results</p>

      {/* <Pagination results={results} /> */}

      <div className="search-box">
        {results ? (
          results.map((result, index) => (
            <div key={index.id} className="single-result">
              <h4>{result.title}</h4>
              <div className="single-result__author">
                <span>{result.authorString}</span>
              </div>
              <div>
                <span className="single-result__title">{result.journalTitle},</span>
                <span>
                  {result.journalVolume || result.issue || result.pageInfo
                    ? `${result.journalVolume} (${result.issue}):${result.pageInfo},`
                    : ''}
                </span>
                <span>{formatDate(result.firstPublicationDate)}</span>
              </div>
              <span>
                Cited by: {result.citedByCount} articles | PMID: {result.pmid}
                {result.pmcid ? `| PMCID: ${result.pmcid}` : ''}
              </span>
              <hr />
            </div>
          ))
        ) : (
          <p>Enter a search term to view results</p>
        )}
      </div>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.array
};

export default Results;
