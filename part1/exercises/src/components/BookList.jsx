import React from 'react';
import classes from './BookList.module.css';

class BookList extends React.Component {
  render() {
   let pageTitle = "My Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/61GldX4MpUL._SL1500_.jpg";
   let book2 = "https://s26162.pcdn.co/wp-content/uploads/2023/01/9780374606244-668x1024.jpg";
   let book3 = "https://s26162.pcdn.co/wp-content/uploads/2023/12/9781784878771-630x1024.jpg";

   return (
      <div className={classes.bookDiv}>
         <h3 className={classes.bookHeading}>{pageTitle}</h3>
         <img src={book1} className={classes.bookImg} alt="Happy by Celina Baljeet Basra" />
         <img src={book2} className={classes.bookImg} alt="The Sun Walks Down by Fiona McFarlane" />
         <img src={book3} className={classes.bookImg} alt="A Wild Sheep Chase by Haruki Murakami" />
      </div>      
   );
  }
}

export default BookList;