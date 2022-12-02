import axios from 'axios';

const getResults = async () => {
  const results = await axios.get(
    'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=cat&resultType=lite&cursorMark=*&pageSize=25&format=json'
  );

  console.log('results', results);
  return results;
};

export default getResults;
