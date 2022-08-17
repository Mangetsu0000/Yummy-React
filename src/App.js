import { useState } from "react";
import RecipiesList from "./components/RecipiesList";
import Card from "./components/shared/Card";
import RecipiesData from "./Data/RecipiesData";
function App() {
  const [data, setData] = useState(RecipiesData);
  return (
    <>
      <RecipiesList className="recipeList" recipies={data} setData={setData} />
    </>
  );
}

export default App;
