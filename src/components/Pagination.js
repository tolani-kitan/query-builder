import { Pagination } from '@mui/material';
// import PropTypes from 'prop-types';
import { useState } from 'react';

const Pagination = () => {
  const [page, setPage] = useState(0);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Pagination
        page={page}
        onChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

// Pagination.propTypes = {
//   results: PropTypes.array
// };

export default Pagination;
