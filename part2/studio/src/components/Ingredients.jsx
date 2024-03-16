import recipedata from "./recipe.json";

function IngredientList() {
  let ingredientList = recipedata.map(recipe => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    })
    // return ( 
    //   <ul key={recipe.name}>
    //     <li>{recipe.ingredients[0]}</li>
    //     <li>{recipe.ingredients[1]}</li>
    //     <li>{recipe.ingredients[2]}</li>
    //     <li>{recipe.ingredients[3]}</li>
    //     <li>{recipe.ingredients[4]}</li>
    //   </ul>
    // )
  });
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredientList}
    </div>
  );
}
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 