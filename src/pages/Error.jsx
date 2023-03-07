import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  useEffect(() => {
    document.body.classList.add('background-fixed');
    return () => {
      document.body.classList.remove('background-fixed');
    };
  }, []);

  return (
    <section className="section">
      <div className="error-container">
        <h1>Ooops! It's a Dead End</h1>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  );
};
export default Error;
