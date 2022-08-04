import React from "react";

function RecipeItem({ recipe, setData }) {
  const handleClick = () => {
    let userRating = prompt("rate recipe out of 5");
    if (userRating < 0 || userRating > 5) {
      alert("rating must be between 0 and 5");
    } else {
      setData((data) =>
        data.map((rcp) =>
          rcp.id == recipe.id
            ? { ...rcp, rating: (parseInt(userRating) + rcp.rating) / 2 }
            : rcp
        )
      );
    }
  };

  return (
    <div className="recipeCard">
      <div className="recipeInfo">
        <h1>{recipe.name}</h1>
        <h3>{recipe.rating}</h3>
      </div>
      <div className="recipeImg">
        <img src={recipe.imageUrl} />
      </div>
      <div className="rating">
        <button onClick={handleClick}>Rate</button>
      </div>
    </div>
  );
}

export default RecipeItem;
