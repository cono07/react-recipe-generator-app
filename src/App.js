import "./App.css";

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

  return (
    <div className="App">
      <Header></Header>
      <UserIngredients ingredients={uniqueIngredients}></UserIngredients>
      <RecipeList recipeListArr={recipeListArr}></RecipeList>
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <header>
      <h1>Recipe App</h1>
      <p>
        Welcome to our recipe app. Please add some ingredients to find some
        recipes!
      </p>
    </header>
  );
};

const DropdownIngredients = ({ ingredients }) => {
  console.log("in comp: ", ingredients);
  return (
    <select name="ingredients" id="ingredients">
      {ingredients.map((ingredient) => {
        return <option key={ingredient}>{ingredient}</option>;
      })}
    </select>
  );
};

const UserIngredients = ({ ingredients }) => {
  return (
    <form>
      <label>Please type an ingredient here to add it to your list: </label>
      <DropdownIngredients ingredients={ingredients}></DropdownIngredients>
      <button type="submit" id="submitButton">
        Add Ingredient
      </button>
      <button type="submit" id="findRecipe">
        Find Recipe
      </button>
    </form>
  );
};

const RecipeList = ({ recipeListArr }) => {
  return (
    <main>
      {recipeListArr.map((recipe) => {
        return (
          <div className="recipeItemContainer" key={recipe.recipeName}>
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
      })}
    </main>
  );
};
