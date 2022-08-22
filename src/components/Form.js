import React from "react";
import Card from "./shared/Card";

import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ setData }) => {
  const recipeNameRef = useRef();
  const recipeRatingRef = useRef();
  const handleClick = () => {
    const recipeName = recipeNameRef.current.value;
    const recipeRating = recipeRatingRef.current.value;

    setData((data) => [
      ...data,
      { name: recipeName, id: uuidv4(), rating: recipeRating },
    ]);
    recipeNameRef.current.value = "";
    recipeRatingRef.current.value = "";
  };
  return (
    <Card>
      <input ref={recipeNameRef} type="text" placeholder="recipe name" />
      <input ref={recipeRatingRef} type="number" placeholder="recipe rating" />
      <button onClick={handleClick}>Add Recipe</button>
    </Card>
  );
};

//   with state
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//     console.log(inputValue);
//   };

//   const handleAdd = () => {
//     newRecipe.name = inputValue;
//     console.log(`Recipe's name :${newRecipe.name}`);
//     setData((data) => {
//       data.push(newRecipe);

//       setInputValue("");
//     });
//   };

//   return (
//     <Card>
//       <div className="form-control">
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="Enter recipe's name"
//           value={inputValue}
//         />
//         <input type="text" />
//         <button onClick={handleAdd}>Add Recipe</button>
//       </div>
//     </Card>
//   );
// };

export default Form;
