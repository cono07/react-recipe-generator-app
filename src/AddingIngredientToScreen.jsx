const AddingIngredientsToScreen = ({ ingredientsArray }) => {
  return (
    <div className="user-ingredients-list-box">
      <p>You're chosen ingredients: </p>
      <ul>
        {ingredientsArray.map((ingredient) => {
          return (
            <li className="user-ingredient" key={ingredient}>
              {ingredient}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddingIngredientsToScreen;
