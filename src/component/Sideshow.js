import React, {useEffect, useState} from 'react'

export default function Sideshow(props) {
// const [Data, SetData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []);
  let brings = props.each;
  let { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strInstructions, strInstructionsDE, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15} = brings;
    return (
      
        <article className=" float-left w-1/3 py2 px-2 overflow-y-auto h-screen  grid place-items-stretch...">
        <div className="w-full py-1 py-1 mt-1">
       <img src={strDrinkThumb}  className="w-full rounded" alt="" />
        </div>
        <article className="w-full grid place-items-center py-1 px-1">
         <h3  className="w-full py-1 py-1 mt-2">Name: {strDrink}</h3>
         <h4  className="w-full py-1 py-1 mt-2 text-xs">Instruction:{strInstructions} </h4>
        </article>

        <div className="w-full ...">
            <h3>Ingredient</h3>
            <aside className="grid grid-cols-3 gap-4 ">
          <h4 className="py-1 px-1 text-xs" >{strIngredient1?`${strIngredient1}`:" "}</h4>  
          <h4 className="py-1 px-1 text-xs" >{strIngredient2?`${strIngredient2}`:" "}</h4> 
          <h4 className="py-1 px-1 text-xs" >{strIngredient3?`${strIngredient3}`:" "}</h4> 
          <h4 className="py-1 px-1 text-xs" >{strIngredient4?`${strIngredient4}`:" "}</h4> 
          <h4 className="py-1 px-1 text-xs" >{strIngredient5?`${strIngredient5}`:" "}</h4> 
          <h4 className="py-1 px-1 text-xs" >{strIngredient6?`${strIngredient6}`:" "}</h4> 
          </aside>
        </div>

        </article>

    )
}
