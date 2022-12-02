import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import formatDate from '../helpers/date';
import '../styles/results.scss';

const Results = ({ results }) => {
  console.log('results', results);
  const [page, setPage] = useState(0);

  return (
    <div className="search-results">
      <p className="search-results__title">Search results</p>

      {results.length > 0 ? (
        <Pagination
          count={results.length}
          page={page}
          hidePrevButton
          onChange={(newPage) => setPage(newPage)}
        />
      ) : (
        ''
      )}

      <div className="search-box">
        {results ? (
          results.map((result, index) => (
            <div key={index.id} className="single-result">
              <h4>{result.title}</h4>
              <div>
                <span>{result.authorString}</span>
              </div>
              <div>
                <span>{result.journalTitle},</span>
                <span>
                  {result.journalVolume}({result.issue}):{result.pageInfo},
                </span>
                <span>{formatDate(result.firstPublicationDate)}</span>
              </div>
              <span>
                Cited by: {result.citedByCount} articles | PMID: {result.pmid}
                {result.pmcid ? `| PMCID: ${result.pmcid}` : ''}
              </span>
              <br />
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
