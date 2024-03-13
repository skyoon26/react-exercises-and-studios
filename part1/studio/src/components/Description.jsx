import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
  let authorLink = "https://www.brianlagerstrom.com/recipes/the-absolute-best-chocolate-chip-cookies";
  let authorPhoto = "https://images.squarespace-cdn.com/content/v1/62227f3fe1583d580047c391/a3211104-0992-4b2b-8f96-6f253ac26bbf/Brian_Lauren__0028+layers+for+squarespace.png?format=1500w";
  let authorName = "Brian Lagerstrom";
  
  return (
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt="A photo of chef Brian Lagerstrom" className={styles.imageUpdates}/>
        <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>The Absolute Best Chocolate Chip Cookies</a>
        </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div> 
        <div>
          <h1>The Absolute Best Chocolate Chip Cookies</h1>
          <p>This recipe yields 8 jumbo cookies and will indeed be the best chocolate chip cookies you will ever make.</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;