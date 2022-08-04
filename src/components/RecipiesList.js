import React from "react";
import RecipeItem from "./RecipeItem";

function RecipiesList({ recipies, setData }) {
  return recipies.map((item) => (
    <RecipeItem recipe={item} key={item.id} setData={setData} />
  ));
}

export default RecipiesList;
