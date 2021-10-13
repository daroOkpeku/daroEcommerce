import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
export default function Item(props) {
  let assign = props.all
   let good = props.good

  const handleClick = (id)=>{
     props.SetSelect(id)
  }
  let Storage = [];
    
    
    //  useEffect(()=>{
    //  let bool = document.querySelectorAll('.good')
    // console.log(bool)
    //  },[])
  
  const handleCart = (e)=>{
    
     let element = e.target
    let cart = e.target.dataset.name
     good.filter(item=>{
         if(  item.strDrink === cart){
             element.innerText = 'In Cart'
             element.setAttribute('disabled', true);
           //  item.strDrink   item.strDrinkThumb idDrink

           let Cartone = {drink:item.strDrink,  picture:item.strDrinkThumb, id:item.idDrink, amount:1}
     
       
                let nibble = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
                if(nibble){
                      nibble = [...nibble, Cartone]
                      console.log(nibble)
                      localStorage.setItem('cart', JSON.stringify(nibble))
                }else if(!nibble){
                    Storage = [...Storage, Cartone];
                    localStorage.setItem('cart', JSON.stringify(Storage))
                     }
           
         }
        
     });
  }
 
    //  let name = '155 Belmont'
  const getBtnText =(name)=>{
let nibble = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
let search = nibble.find(item=>item.drink === name)
if(search){
return 'In Cart'
}else{
 return 'Add to Cart'
}

  
    
  }
    return (
<div className="grid place-items-center grid-cols-2 gap-4  ...">
              
                         { assign.length > 0?assign.map(item=><div key={item.idDrink} className="w-60 shadow-md py-3 px-3 rounded-md ">
                   <article className="w-full"  onClick={()=>handleClick(item.idDrink)}>
                       <img src={item.strDrinkThumb} className="w-full h-44 object-cover rounded " />
                   </article>
                     
                   <Link to={`/Products/${item.idDrink}`}>  <span className="w-full grid place-items-center mt-2 text-purple-500 ">{item.strDrink}</span></Link>


                     <aside className="w-full flex justify-between items-center mt-2">
                         <span>
                    <h5 className="mt-1">price</h5>
                     <h4 className="text-sm mt-1">5000</h4>
                     </span>

                     <span>
                         <button className=" good text-sm py-2 px-2 w-24 border border-purple-500 text-purple-500 rounded" data-name={item.strDrink}  onClick={(e)=>handleCart(e)}>Add to Cart</button>
                     </span>
                     </aside>
                 </div>):good.map(item=><div key={item.idDrink} className="w-60 shadow-md py-3 px-3 rounded-md ">
                   <article className="w-full"  onClick={()=>handleClick(item.idDrink)}>
                       <img src={item.strDrinkThumb} className="w-full h-44 object-cover rounded " />
                   </article>
                     
                   <Link to={`/Products/${item.idDrink}`}>  <span className="w-full grid place-items-center mt-2 text-purple-500 ">{item.strDrink}</span></Link>


                     <aside className="w-full flex justify-between items-center mt-2">
                         <span>
                    <h5 className="mt-1">price</h5>
                     <h4 className="text-sm mt-1">5000</h4>
                     </span>

                     <span>
                         <button className=" good text-sm py-2 px-2 w-24 border border-purple-500 text-purple-500 rounded " data-name={item.strDrink}   onClick={(e)=>handleCart(e)}>{getBtnText(item.strDrink)}</button>
                     </span>
                     </aside>
                 </div>)    
                 
                 }
        </div>
    )
}
