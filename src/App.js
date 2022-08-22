import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import RecipiesList from "./components/RecipiesList";
import RecipiesData from "./Data/RecipiesData";
function App() {
  const [data, setData] = useState(RecipiesData);
  return (
    <>
      <RecipiesList className="recipeList" recipies={data} setData={setData} />
      <Form setData={setData} />
    </>
  );
}

export default App;
