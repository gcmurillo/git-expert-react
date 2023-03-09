import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'The Office' ]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]); // Creando un nuevo state
    }

    console.log(categories)

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                 onAddCategory={ onAddCategory } 
            />

            { categories.map( (category) => {
                return (<GifGrid 
                    key={category} 
                    category={category}
                />)
            }) }

            
        </>
    )
}