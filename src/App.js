import "./App.css";
import RecipeList from "./RecipeList";
import AddUserIngredients from "./AddUserIngredients";
import Header from "./Header";
import AddingIngredientsToScreen from "./AddingIngredientToScreen";
import { useState } from "react";

function App() {
  const recipeListArr = [
    {
      recipeName: "Veggie Pizza",
      ingredient: ["tomato", "flour", "cheese", "peppers", "mushrooms"],
    },
    {
      recipeName: "Meaty Pizza",
      ingredient: ["tomato", "flour", "cheese", "ham", "chicken", "beef"],
    },
    {
      recipeName: "Margherita Pizza",
      ingredient: ["tomato", "flour", "cheese"],
    },
    {
      recipeName: "Sea Pizza",
      ingredient: ["tomato", "flour", "cheese", "prawns"],
    },
  ];

  const allRecipes = recipeListArr
    .map((recipe) => {
      return recipe.ingredient;
    })
    .map((ingredient) => {
      return ingredient;
    })
    .flat();

  const uniqueIngredients = [...new Set(allRecipes)];

  const [userIngredients, setUserIngredients] = useState([]);
  console.log("all ingredients:", userIngredients);

  return (
    <div className="App">
      <Header></Header>
      <AddUserIngredients
        uniqueIngredients={uniqueIngredients}
        setUserIngredients={setUserIngredients}
      ></AddUserIngredients>
      <AddingIngredientsToScreen
        ingredientsArray={userIngredients}
      ></AddingIngredientsToScreen>
      <RecipeList
        recipeListArr={recipeListArr}
        userIngredients={userIngredients}
      ></RecipeList>
    </div>
  );
}

export default App;
