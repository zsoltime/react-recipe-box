/* eslint-disable max-len */
import React, { PropTypes } from 'react';

const Recipe = ({ id, name, image, time, calories, ingredients, onDelete }) => {
  const renderTime = (mins) => {
    if (mins < 60) {
      return `${mins}mins`;
    }
    return `${Math.floor(mins / 60)}hrs ${mins % 60}mins`;
  };

  return (
    <div className="recipe">
      <button
        className="recipe__btn recipe__btn--delete"
        data-id={id}
        aria-label="Delete recipe"
        onClick={() => onDelete(id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h2 className="recipe__title">{name}</h2>
      {image && (
        <div className="recipe__image">
          <img src={image} alt={name} />
        </div>
      )}
      <div className="recipe__stats">
        <span className="recipe__stat recipe__stat--time">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="16"
            height="16"
            viewBox="0 0 60 60"
            className="timer"
          >
            <path d="M30,0c-0.553,0-1,0.447-1,1v13.292c0,0.553,0.447,1,1,1s1-0.447,1-1V2.018C45.979,2.546,58,14.896,58,30 c0,15.439-12.561,28-28,28S2,45.439,2,30c0-7.46,2.9-14.479,8.166-19.764c0.391-0.392,0.389-1.024-0.002-1.414 C9.772,8.434,9.14,8.434,8.75,8.824C3.107,14.486,0,22.007,0,30c0,16.542,13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z" />
            <path className="timer__hand" d="M28.555,33.532c0.614,0.845,1.563,1.376,2.604,1.457C31.252,34.997,31.345,35,31.437,35c0.942,0,1.848-0.372,2.519-1.044 c0.737-0.737,1.114-1.756,1.033-2.797s-0.612-1.99-1.459-2.606l-12.944-9.363c-0.396-0.286-0.945-0.242-1.293,0.104 c-0.348,0.348-0.391,0.896-0.104,1.293L28.555,33.532z M32.355,30.172c0.371,0.27,0.604,0.687,0.64,1.144 c0.036,0.456-0.13,0.903-0.453,1.227c-0.324,0.323-0.779,0.488-1.228,0.453c-0.456-0.035-0.873-0.269-1.141-0.637l-5.713-7.897 L32.355,30.172z" />
          </svg>
          {renderTime(time)}</span>
        <span
          className="recipe__stat recipe__stat--calories"
        >{calories}kcal</span>
        <span
          className="recipe__stat recipe__stat--ingredients"
        >{ingredients.length} ingredients</span>
      </div>
    </div>
  );
};

Recipe.defaultProps = {
  calories: 0,
  image: 'placeholder.svg',
  time: 0,
};

Recipe.propTypes = {
  calories: PropTypes.number,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  time: PropTypes.number,
};

export default Recipe;
