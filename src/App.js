import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UserIngredients></UserIngredients>
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
      <button type="submit">Submit</button>
      {/* FIND RECIPES BUTTON NEEDED */}
    </form>
  );
};
