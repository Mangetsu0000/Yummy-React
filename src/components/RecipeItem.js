import React from "react";

import Card from "./shared/Card";

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
    <Card className="recipeCard">
      <h1>{recipe.name}</h1>
      <h3>{recipe.rating}</h3>
      <div className="recipeImg">
        <img src={recipe.imageUrl} />
      </div>
      <div className="rating">
        <button onClick={handleClick}>Rate</button>
      </div>
    </Card>
  );
}

export default RecipeItem;
