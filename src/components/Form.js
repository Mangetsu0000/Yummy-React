import React from "react";
import Card from "./shared/Card";

import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ setData }) => {
  const recipeNameRef = useRef();
  const handleClick = () => {
    const recipeName = recipeNameRef.current.value;
    const newRecipe = { name: recipeName, id: uuidv4() };
    console.log(newRecipe);

    setData((data) => ({...data, ({ name: recipeName, id: uuidv4() }) }));
    recipeNameRef.current.value = "";
  };
  return (
    <Card>
      <input ref={recipeNameRef} type="text" />
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
