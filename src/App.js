import { useState } from "react";
import RecipiesList from "./components/RecipiesList";
import RecipiesData from "./Data/RecipiesData";
function App() {
  const [data, setData] = useState(RecipiesData);
  return (
    <>
      <RecipiesList recipies={data} setData={setData} />
    </>
  );
}

export default App;
