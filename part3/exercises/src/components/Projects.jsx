import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

  function handleClick() {
   if (index < data.projects.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

  let projects = data.recipes;
  let project = projects[index];

  function handleClick() {
    if (index < data.recipes.length-1)
    {
       setIndex(index + 1);
    }
    else 
    {
       setIndex(0);
    }
 }

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>{project.dessert} by {project.chef}
      </h2>
      <img src={project.photoUrl} alt={project.alt} />
    </div>
  );
}
