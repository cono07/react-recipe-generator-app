import { useState } from "react";
import DropdownIngredients from "./DropdownIngredients";

// gets array of unique ingredients in the app.jsx
const AddUserIngredients = ({ uniqueIngredients, setUserIngredients }) => {
  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event here: ", event.target.value);
    setUserIngredients((currList) => {
      console.log("current list: ", currList);
      return [newIngredient, ...currList];
    });
  };

  return (
    <form>
      <label>Please type an ingredient here to add it to your list: </label>
      <select
        name="ingredients"
        id="ingredients"
        onChange={(event) => {
          console.log("in onchange: ", event.target.value);
          setNewIngredient(event.target.value);
        }}
      >
        {uniqueIngredients.map((ingredient) => {
          return (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          );
        })}
      </select>
      {/* <DropdownIngredients ingredients={ingredients}></DropdownIngredients> */}
      <button type="submit" id="submitButton" onClick={handleSubmit}>
        Add Ingredient
      </button>
      <button type="submit" id="findRecipe">
        Find Recipe
      </button>
    </form>
  );
};

export default AddUserIngredients;
