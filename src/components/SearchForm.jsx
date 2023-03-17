import { useGlobalContext } from '../context';
import { useEffect, useRef } from 'react';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="form-section">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-div">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
