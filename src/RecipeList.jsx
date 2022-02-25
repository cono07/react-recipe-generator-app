import RecipeContainer from "./RecipeContainer";
import { useState } from "react";

const RecipeList = ({ recipeListArr, userIngredients }) => {
  console.log("recipe list comp: ", userIngredients);
  const [recipeList, setRecipeList] = useState(recipeListArr);

  //go though recipes and create new array of matched ingredients
  let selectRecipes = [];
  const handleSubmit = () => {
    for (let recipe of recipeListArr) {
      for (let i = 0; i < userIngredients.length; i++) {
        if (recipe["ingredient"].includes(userIngredients[i])) {
          selectRecipes.push(recipe);
        }
      }
      console.log("select rec:", selectRecipes);
    }
    return setRecipeList(selectRecipes);
  };

  console.log("select recipes:", recipeList);

  return (
    <main>
      <button type="submit" id="findRecipe" onClick={handleSubmit}>
        Find recipes
      </button>
      {recipeListArr.map((recipe) => {
        return (
          <RecipeContainer
            recipe={recipe}
            key={recipe.recipeName}
          ></RecipeContainer>
        );
      })}
    </main>
  );
};

export default RecipeList;
