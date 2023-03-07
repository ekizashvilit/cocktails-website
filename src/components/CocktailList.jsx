import { useGlobalContext } from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h1 className="no-match">no cocktails matched your search criteria</h1>
    );
  }

  return (
    <section className="cocktails-section">
      <h1>Cocktails</h1>
      <div className="cocktails-div">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default CocktailList;
