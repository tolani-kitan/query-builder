import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';
import '../styles/home.scss';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import Results from './Results';

const Home = () => {
  const [term, setTerm] = useState('');
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(false);
  const [option, setOption] = useState('');
  const [results, setResults] = useState([]);

  const updateTerm = (e) => {
    const { value } = e.target;
    setTerm(value);
    if (value) setLoading(true);
  };

  const add = () => {
    const queries = [];

    queries.push(term);
    setQuery(term);
    setTerm('');
    setLoading(false);
    setInput(true);
  };

  const getResult = async () => {
    const { data } = await axios.get(
      `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${query}&resultType=lite&cursorMark=*&format=json`
    );

    setResults(data.resultList.result);
  };

  return (
    <div className="form-section">
      <div className="form">
        <h3 className="heading_3"> Advanced search query builder </h3>

        <div className="heading">
          <p className="heading__title">
            <strong>Add keyword or phrase</strong>
          </p>
          <div className="heading__icon">
            <ArrowDropDownIcon />
          </div>
        </div>

        <form>
          <Label label="Enter term or phrase" id="term" className="form-label" />
          {input ? (
            <div className="form-display">
              <select
                className="form-display__select"
                value={option}
                onChange={(e) => setOption(e.target.value)}>
                <option value="AND">AND</option>
                <option value="OR">OR</option>
              </select>
              <Input id="term" value={term} onChange={updateTerm} className="form-display__input" />
              <Button
                buttonText="Add"
                loading={!loading}
                onClick={add}
                className={loading ? 'form-display__button' : 'form-display__button disabled'}
              />
            </div>
          ) : (
            <div className="form-display">
              <Input id="term" value={term} onChange={updateTerm} className="form-display__input" />
              <Button
                buttonText="Add"
                loading={!loading}
                onClick={add}
                className={loading ? 'form-display__button' : 'form-display__button disabled'}
              />
            </div>
          )}
        </form>
      </div>
      <div className="line-break"></div>

      <div className="form">
        <form>
          <Label label="Search query" id="query" className="form-label ft-600" />
          <div className="form-display">
            <Input
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-display__input_two"
            />
            <Button
              buttonText="View Search Results"
              onClick={getResult}
              className="form-display__button_two"
            />
          </div>
        </form>
      </div>

      <div className="line-break"></div>

      <Results results={results} />
    </div>
  );
};

export default Home;
