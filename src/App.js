import "./App.css";

function App() {

  const recipeListArr = [{
  recipeName: 'Veggie Pizza', 
  ingredient: ['tomato', 'flour', 'cheese', 'peppers', 'mushrooms'],
}, 
{
   recipeName: 'Meaty Pizza', 
  ingredient: ['tomato', 'flour', 'cheese', 'ham', 'chicken', 'beef'],
},
{
   recipeName: 'Margherita Pizza', 
  ingredient: ['tomato', 'flour', 'cheese'],
},
{
   recipeName: 'Sea Pizza', 
  ingredient: ['tomato', 'flour', 'cheese', 'prawns'],
}]

const allIngredients = recipeListArr.map((recipe) => {
  return recipe
})

const ingredient = allIngredients['ingredient'].map((ingredient) => {
  return ingredient
})

console.log(ingredient)
  return (
    <div className="App">
      <Header></Header>
      <UserIngredients></UserIngredients>
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

const UserIngredients = () => {
  return (
    <form>
      <label>Please type an ingredient here to add it to your list: </label>
      <input type="text"></input>
      <button type="submit" id="submitButton">Submit</button>
      <button type="submit" id="findRecipe">Find Recipe</button>
    </form>
  );
};

const RecipeList = ({recipeListArr}) => {

 return (
   <main>
     {recipeListArr.map((recipe)=>{
       return <div className="recipeItemContainer">
         <h2 key={recipe.recipeName} className="recipeTitle">
           {recipe.recipeName}
         </h2>
         <p className="ingredientsTitle">Ingredients:</p>
         <ul>
           {recipe['ingredient'].map((ingredient)=>{
             return <li className="ingredientItem" key={recipe.recipeName + ingredient}>
               {ingredient}
             </li>
           })}
         </ul>
       </div>
     })
     }
   </main>
 ) 
};
