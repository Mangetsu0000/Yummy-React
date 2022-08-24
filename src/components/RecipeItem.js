import React from "react";

import { useState } from "react";
import { useRef } from "react";

import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function RecipeItem({ recipe, setData }) {
  const [update, setUpdate] = useState(false);

  const handleUpdateClick = () => {
    setUpdate(true);
  };

  const recipeNameRef = useRef();
  const recipeRatingRef = useRef();

  const handleSubmit = () => {
    const recipeName = recipeNameRef.current.value;
    const recipeRating = recipeRatingRef.current.value;
    setData((data) =>
      data.map((rcp) =>
        rcp.id === recipe.id
          ? { ...rcp, name: recipeName, rating: recipeRating }
          : rcp
      )
    );
  };

  const handleClick = () => {
    let userRating = prompt(`rate ${recipe.name} out of`);
    if (userRating < 0 || userRating > 5) {
      alert("rating must be between 0 and 5");
    } else {
      setData((data) =>
        data.map((rcp) =>
          rcp.id === recipe.id
            ? { ...rcp, rating: (parseInt(userRating) + rcp.rating) / 2 }
            : rcp
        )
      );
    }
  };

  const handleDelete = () => {
    setData((data) =>
      data.filter((rcp) => {
        return rcp.id != recipe.id;
      })
    );
    alert(`Deleted ${recipe.name} recipe`);
  };

  return (
    // pass cardDark={true} prop
    <Card className="recipeCard">
      <div className="show">
        <h1>{recipe.name}</h1>
        <h3>Rating: {recipe.rating}</h3>
        <div className="recipeImg">
          <img src={recipe.imageUrl} alt="" />
        </div>
        <div className="rating">
          <button onClick={handleClick}>Rate</button>
        </div>
        <button onClick={handleDelete} className="close">
          <FaTimes className="close__FaTimes" color="white" />
        </button>
        <div className="update">
          <button onClick={handleUpdateClick}>Update</button>
        </div>
      </div>

      {update && (
        <div className="edit">
          <form onSubmit={handleSubmit}>
            <h5>previous name: {recipe.name}</h5>
            <label htmlFor="">Update recipe name</label>
            <input
              type="text"
              placeholder="Enter new recipe name"
              ref={recipeNameRef}
            />
            <h5>previous rating: {recipe.rating}</h5>
            <label>Update Rating</label>
            <input
              type="number"
              placeholder="Enter new rating"
              ref={recipeRatingRef}
            />
            <button>Confirm & Submit</button>
          </form>
        </div>
      )}
    </Card>
  );
}

export default RecipeItem;
