import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ getMovie }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handlerChange({ target: { value } }) {
    setSearchParams({ search: value });
  }

  const query = searchParams.get('search');

  function handleSubmit(e) {
    e.preventDefault();
    const data = searchParams.get('search');
    getMovie(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handlerChange} value={query || ''} />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
