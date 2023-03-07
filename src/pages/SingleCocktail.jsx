import { useEffect } from 'react';

const SingleCocktail = () => {
  useEffect(() => {
    document.body.classList.add('background-fixed');
    return () => {
      document.body.classList.remove('background-fixed');
    };
  }, []);

  return <div>SingleCocktail</div>;
};
export default SingleCocktail;
