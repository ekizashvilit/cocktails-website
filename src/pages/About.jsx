import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.body.classList.add('background-fixed');
    return () => {
      document.body.classList.remove('background-fixed');
    };
  }, []);

  return (
    <section className="section">
      <h1 className="section-title width">About Us</h1>
      <p className="width">
        Welcome to The Cocktail Lounge! Our mission is to provide cocktail
        lovers with a fun and easy way to discover and learn how to make their
        favorite drinks. With our extensive database of cocktail recipes, you
        can find everything from classic cocktails to trendy and creative new
        concoctions. Our team of expert mixologists and cocktail enthusiasts is
        dedicated to bringing you the best and most delicious drink recipes,
        along with helpful tips and tricks to help you perfect your bartending
        skills. Whether you're a seasoned pro or just starting out, The Cocktail
        Lounge has something for everyone. So why not join us for a drink?
        Explore our website and discover a world of exciting cocktail recipes
        and techniques. Cheers!
      </p>
    </section>
  );
};
export default About;
