/* eslint-disable max-len */
import React, { Component } from 'react';

import Recipe from 'Recipe';
import Modal from 'Modal';
import { getRecipes, setRecipes } from 'RecipeAPI';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      activeId: null,
      newRecipe: null,
      // set some if it's empty and there is nothing stored in localstorage
      recipes: getRecipes(),
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidUpdate() {
    setRecipes(this.state.recipes);
  }
  openModal() {
    this.setState({
      showModal: true,
    }, () => this.nameField.focus());
  }
  closeModal() {
    this.setState({
      showModal: false,
    });
  }
  handleDelete(id) {
    // todo: add confirmation modal
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== id),
    }));
  }
  handleFormChange(e) {
    this.setState({
      newRecipe: {
        ...this.state.newRecipe,
        [e.target.name]: e.target.value,
      },
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const stringToArray = str => (
      str.split(',')
        .map(s => s.trim())
        .filter(s => s)
    );

    this.setState(prevState => ({
      recipes: [
        ...prevState.recipes,
        {
          ...prevState.newRecipe,
          ingredients: stringToArray(prevState.newRecipe.ingredients),
        },
      ],
      showModal: false,
    }));
  }
  render() {
    return (
      <div className="board">
        <div className="recipes">
          {this.state.recipes.map(recipe => (
            <Recipe key={recipe.id} onDelete={this.handleDelete} {...recipe} />
          ))}
        </div>
        <Modal
          isOpen={this.state.showModal}
          title="Add your recipe"
          onClose={this.closeModal}
        >
          <form
            className="add-recipe-form"
            onChange={this.handleFormChange}
            onSubmit={this.handleFormSubmit}
          >
            <input
              className="add-recipe-form__field"
              id="recipe-name"
              type="text"
              name="name"
              ref={(node) => { this.nameField = node; }}
              placeholder="Recipe name"
            />
            <label
              className="add-recipe-form__label"
              htmlFor="recipe-name"
            >Recipe name</label>

            <input
              className="add-recipe-form__field"
              id="recipe-image"
              type="url"
              name="image"
              ref={(node) => { this.image = node; }}
              placeholder="Image URL"
            />
            <label
              className="add-recipe-form__label"
              htmlFor="recipe-image"
            >Image URL</label>

            <input
              className="add-recipe-form__field"
              id="recipe-ingredients"
              type="text"
              name="ingredients"
              ref={(node) => { this.ingredients = node; }}
              placeholder="Comma separated list of ingredients"
            />
            <label
              className="add-recipe-form__label"
              htmlFor="recipe-ingredients"
            >Comma separated list of ingredients</label>

            <input
              className="add-recipe-form__field"
              id="recipe-time"
              type="number"
              name="time"
              ref={(node) => { this.time = node; }}
              placeholder="Time to cook in minutes"
            />
            <label
              className="add-recipe-form__label"
              htmlFor="recipe-time"
            >Time to cook in minutes</label>

            <input
              className="add-recipe-form__field"
              id="recipe-calories"
              type="number"
              name="calories"
              ref={(node) => { this.calories = node; }}
              placeholder="Calories per serving"
            />
            <label
              className="add-recipe-form__label"
              htmlFor="recipe-calories"
            >Calories per serving</label>
            <button
              className="add-recipe-form__btn"
              type="submit"
            >Add Recipe</button>
          </form>
        </Modal>
        <button
          className="btn btn--add-recipe"
          aria-label="Add recipe"
          onClick={this.openModal}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="40"
            height="40"
            viewBox="0 0 512 512"
          >
            <path fill="currentColor" d="M256,0C114.844,0,0,114.839,0,256s114.844,256,256,256s256-114.839,256-256S397.156,0,256,0z M389.594,272.699H272.699    v116.895c0,9.225-7.48,16.699-16.699,16.699c-9.219,0-16.699-7.475-16.699-16.699V272.699H122.406  c-9.219,0-16.699-7.475-16.699-16.699c0-9.225,7.48-16.699,16.699-16.699h116.895V122.406c0-9.225,7.48-16.699,16.699-16.699    c9.219,0,16.699,7.475,16.699,16.699v116.895h116.895c9.219,0,16.699,7.475,16.699,16.699    C406.294,265.225,398.813,272.699,389.594,272.699z" />
          </svg>
        </button>
      </div>
    );
  }
}

export default Board;
