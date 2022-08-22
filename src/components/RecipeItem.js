import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function RecipeItem({ recipe, setData }) {
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
    </Card>
  );
}

export default RecipeItem;
