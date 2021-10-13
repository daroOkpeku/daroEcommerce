import React,{useState, useContext} from 'react'
import { FaTrashAlt, FaRegCaretSquareUp, FaRegCaretSquareDown } from 'react-icons/fa';
import { context } from './component/Context';
export default function Cart() {
  const [check, SetCheck] = useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]);
  const [figure, Setfig] = useState();

 const created = useContext(context);
 let zoom = created.cartData
     const handleIncrease = (e)=>{
       let increase =   e.target.dataset.up
     check.forEach(one=>{
          if(one.id === increase){
        one.amount += 1;
         
          }
         
     })
  
     localStorage.setItem('cart', JSON.stringify(check))

     }

    const getNumber = (id)=>{

        console.log(id)
     let ans  = zoom.find(item=>item.id === id)
     return ans.amount

     }
    return (
        <div>
           <section className="w-full grid place-items-center">
               <div className="w-11/12 mt-5  px-3 py-3 rounded shadow-md">
                 <h2 className="text-4xl capitalize ">Shopping Cart</h2>
               </div>

               <article className="w-11/12 mt-5  px-3 py-3  flex ">
                   <div className="w-8/12  h-96 py-3 px-3">
                       <span className="w-full">
                         <h2 className="px-2 py-2">Shipping Address</h2>
                       </span>

                       <span className="w-full px-2 py-2">
                           <input type="text" className="w-10/12 py-2 rounded border border-purple-500" placeholder="Street Address" />
                       </span>

                       <span className="flex items-center  px-2 py-2 space-x-8 w-5/6 mt-4">
                       <input type="text" className=" py-2 rounded border border-purple-500 w-2/4" placeholder="Country" />
                       <input type="text" className=" py-2 rounded border border-purple-500 w-2/4" placeholder="City" />
                       </span>

                       <span className="flex items-center  px-2 py-2 space-x-8 w-5/6 mt-4">
                       <input type="text" className=" py-2 rounded border border-purple-500 w-2/4" placeholder="Zip code" />
                       <input type="text" className=" py-2 rounded border border-purple-500 w-2/4" placeholder="State" />
                       </span> 

                       <span className="flex items-center  px-2 py-2 space-x-8 w-5/6 mt-4">
                       <input type="text" className=" py-2 rounded border border-purple-500 w-2/4" placeholder="E-mail" />
                       <input type="text" className=" py-2 rounded border border-purple-500 w-2/4" placeholder="Phone" />
                       </span>

                        <span className="flex items-center  px-2 py-2 space-x-8 w-5/6 ">
                       <button type="text" className=" py-2 rounded border border-purple-500 w-2/4 text-purple-500" >Keep Shopping</button>
                       <button type="text" className=" py-2 rounded border border-purple-500 w-2/4 text-purple-500" >Continue to Payment</button>
                       </span>   
                   </div>
                   <div className="w-5/12  h-96 px-4 py-4 overflow-y-auto ">
                       <article className="w-full flex items-center justify-between px-4 py-4 text-purple-500">
                        <h2>Summary</h2> <h3>3</h3>
                       </article>
                         {zoom.map(item=>{
                           return  <section className="w-full  mt-2 flex items-center justify-between" key={item.id}>
                             <div className="">
                                 <img src={item.picture} className="h-16 w-16" alt=""/>
                             </div>
                             <span className="text-sm flex items-center">{item.drink} x 
                             <span className="place-items-center grid">
                                 <span><FaRegCaretSquareUp className="w-8 h-4" data-up={item.id} onClick={(e)=>handleIncrease(e)}/></span>
                                   {/* {item.amount} */}
                                   {getNumber(item.id)}
                                 <span><FaRegCaretSquareDown className="w-8 h-4"/></span>
                             </span>
                             
                             
                              </span>
                             <div className=""><FaTrashAlt className="text-purple-500"/></div>
                             </section>
                         })}
                       

                         </div>

               </article>

           </section>
        </div>
    )
}
