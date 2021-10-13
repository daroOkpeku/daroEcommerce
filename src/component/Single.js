import React from 'react'

export default function Single(props) {
   let {strDrink, strDrinkThumb, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strInstructions} =  props.item
    return (
        <div className="flex justify-center items-center mt-10 w-4/5 m-auto">
            <section className="float-left  ...">
                <img src={strDrinkThumb} className="h-2/3 w-2/3 rounded" alt=" " />
            </section>
             <div className="" >
                 <h2 className="px-2 py-2 grid place-items-center">Instructions: {strInstructions}</h2>
                 <h4 className="py-1 px-1 text-sm" >{strGlass?`${strGlass}`:" "}</h4>
                 <h3 className="mt-4">Ingredient</h3>
                 <aside className="grid grid-cols-3 gap-4 ">
            <h4 className="py-1 px-1 text-sm" >{strIngredient1?`${strIngredient1}`:" "}</h4>  
             <h4 className="py-1 px-1 text-sm" >{strIngredient2?`${strIngredient2}`:" "}</h4> 
             <h4 className="py-1 px-1 text-sm" >{strIngredient3?`${strIngredient3}`:" "}</h4> 
              <h4 className="py-1 px-1 text-sm" >{strIngredient4?`${strIngredient4}`:" "}</h4> 
             <h4 className="py-1 px-1 text-sm" >{strIngredient5?`${strIngredient5}`:" "}</h4> 
              <h4 className="py-1 px-1 text-sm" >{strIngredient6?`${strIngredient6}`:" "}</h4> 
              </aside>
             </div>
        </div>
    )
}
