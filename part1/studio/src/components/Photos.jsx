import styles from './Description.module.css';

export default function RecipePhoto() {
  return (
    <img src="https://images.squarespace-cdn.com/content/v1/62227f3fe1583d580047c391/597ff8c4-ef8f-4add-ac6d-a4df9dfc04bb/chocolage_chip_cookie.jpeg?format=1500w" alt="A photo of the chocolate chip cookie from the recipe" className = {styles.imageUpdates} />
  );
}