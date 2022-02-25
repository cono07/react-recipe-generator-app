const RecipeContainer = ({ recipe }) => {
  console.log("in recipecontainer: ", recipe);
  return (
    <div className="recipeItemContainer">
      <h2 className="recipeTitle">{recipe.recipeName}</h2>
      <p className="ingredientsTitle">Ingredients:</p>
      <ul className="ingredientsList">
        {recipe["ingredient"].map((ingredient) => {
          return (
            <li className="ingredientItem" key={ingredient}>
              {ingredient}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeContainer;
