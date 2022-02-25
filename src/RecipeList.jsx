import RecipeContainer from "./RecipeContainer";

const RecipeList = ({ recipeListArr, userIngredients }) => {
  console.log("recipe list comp: ", userIngredients);

  //go though recipes and create new array of matched ingredients
  let selectRecipes = [];
  const handleSubmit = () => {
    // return (selectRecipes = recipeListArr.map((recipe) => {
    //   console.log(recipe["ingredients"]);
    //   if (recipe["ingredients"].includes("pepperoni")) {
    //     return recipe;
    //   }
    // }));
  };
  console.log("select recipes:", selectRecipes);

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
