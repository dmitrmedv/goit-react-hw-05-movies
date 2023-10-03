import { useSearchParams } from 'react-router-dom';
import './searchForm.css';

const SearchForm = ({ getMovie }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handlerChange({ target: { value } }) {
    value ? setSearchParams({ search: value }) : setSearchParams({});
  }

  const query = searchParams.get('search');

  function handleSubmit(e) {
    e.preventDefault();
    const data = searchParams.get('search');
    getMovie(data);
  }

  return (
    <form onSubmit={handleSubmit} className="search_form">
      <input type="text" onChange={handlerChange} value={query || ''} />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
