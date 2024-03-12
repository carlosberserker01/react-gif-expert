import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";

// Si no le pongo el components/index por defecto entra al index.js
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    // Forma 1
    // const newCategories = [...categories]
    // newCategories.push('Valorant')
    // setCategories(newCategories)

    // Forma 2
    // setCategories([...categories, newCategory])
    // if(categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) return
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])

    // Forma 3
    // setCategories(current => [...current, 'valorant'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
      /> 

      {categories.map(category => (
        <GifGrid 
          key={category}
          category={category}
        />
      ))}
    </>
  )
}
