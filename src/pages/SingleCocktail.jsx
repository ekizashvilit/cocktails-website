import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  useEffect(() => {
    document.body.classList.add('background-fixed');
    return () => {
      document.body.classList.remove('background-fixed');
    };
  }, []);

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h1>No Cocktail To Display</h1>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section">
      <Link to="/" className="btn">
        Back Home
      </Link>
      <div className="wrapper">
        <img src={image} alt="" />
        <div className="info">
          <p>
            <span className="span">Name:</span>
            {name}
          </p>
          <p>
            <span className="span">Category:</span>
            {category}
          </p>
          <p>
            <span className="span">Info:</span>
            {info}
          </p>
          <p>
            <span className="span">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="span">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="span">Ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
export default SingleCocktail;
