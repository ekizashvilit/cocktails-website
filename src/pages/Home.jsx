import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const Home = () => {
  const { loading } = useGlobalContext();

  useEffect(() => {
    if (loading) {
      document.body.classList.add('background-fixed');
    } else {
      document.body.classList.remove('background-fixed');
    }
  }, [loading]);

  return (
    <main className="main">
      <SearchForm />
      <CocktailList />
    </main>
  );
};
export default Home;
