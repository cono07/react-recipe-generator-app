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

export default DropdownIngredients;
