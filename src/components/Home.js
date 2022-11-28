import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useQuery } from '@tanstack/react-query';
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

  // const { data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch(
  //       `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=cat&resultType=lite&cursorMark=*&pageSize=25&format=json`
  //     ).then((res) => res.json())
  // });

  // console.log(data);

  const updateTerm = (e) => {
    const { value } = e.target;
    setTerm(value);
    if (value) setLoading(true);
  };

  const updateQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const updateOption = (e) => {
    const { value } = e.target;
    setOption(value);
    console.log(option);
  };

  const add = () => {
    const queries = [];
    queries.push(term);
    if (option) queries.push(option);
    setQuery(...queries);
    setTerm('');
    setLoading(false);
    setInput(true);
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
              <select className="form-display__select" value={option} onChange={updateOption}>
                <option value="and">AND</option>
                <option value="or">OR</option>
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
              onChange={updateQuery}
              className="form-display__input_two"
            />
            <Button
              buttonText="View Search Results"
              loading
              onClick
              className="form-display__button_two"
            />
          </div>
        </form>
      </div>

      <div className="line-break"></div>

      <Results />
    </div>
  );
};

export default Home;
