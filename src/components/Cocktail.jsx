import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, glass, info }) => {
  return (
    <article className="cocktail-article">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="text-div">
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p className="grey-text">{info}</p>
        <Link to={`/cocktail/${id}`} className="details">
          details
        </Link>
      </div>
    </article>
  );
};
export default Cocktail;
