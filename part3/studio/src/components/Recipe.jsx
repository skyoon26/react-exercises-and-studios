import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.brianlagerstrom.com/recipes/the-absolute-best-chocolate-chip-cookies";
   let authorPhoto = "https://images.squarespace-cdn.com/content/v1/62227f3fe1583d580047c391/a3211104-0992-4b2b-8f96-6f253ac26bbf/Brian_Lauren__0028+layers+for+squarespace.png?format=1500w";
   let authorName = "Brian Lagerstrom";

   return (
      <div>
         <img src={authorPhoto} alt = "A picture of Brian Lagerstrom" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
    "butter",
    "suger",
    "eggs",
    "vanilla extract",
    "chocolate",
    "flour",
    "baking soda",
    "baking powder",
    "salt",
  ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>The Absolute Best Chocolate Chip Cookies</h1>
            <p>Delicious cookies!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://images.squarespace-cdn.com/content/v1/62227f3fe1583d580047c391/597ff8c4-ef8f-4add-ac6d-a4df9dfc04bb/chocolage_chip_cookie.jpeg?format=1500w" alt="A picture of a chocolate chip cookie" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
