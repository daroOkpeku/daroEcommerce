import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AES, enc } from 'crypto-js';
import { RiShoppingBag2Fill } from "react-icons/ri";
import { context } from '../component/Context';
export default function Navbar() {
    // const[user, Setuser] = useState([]);
  let roman = useContext(context)
  let Total = roman.Total
   let CartNum = roman.CartNum
 
   let login = [
       {
           'name':'stephen okpeku',
           'id':1,
           'email':'stephenjason41@gmail.com'
       }
   ]
    let arr;
   const encrypt= AES.encrypt(JSON.stringify(login), 'MYKEY4DEMO').toString();
   localStorage.setItem('Login', encrypt);

   let sale = !!localStorage.getItem('Login')
  
    if(sale === true){
      let ans = localStorage.getItem('Login') 
     let show = AES.decrypt(ans, 'MYKEY4DEMO').toString(enc.Utf8);
       let ring = JSON.parse(show)
     arr = ring
    }else if(sale === false){
  
    }


  const CartData = ()=>{
    let itemTotal = 0;
     let data = !!localStorage.getItem('cart')

     if(data === true){
       let bool = JSON.parse(localStorage.getItem('cart'))
       bool.map(item=>{
        itemTotal += parseInt(item.amount)
           })
       return `${itemTotal}`
     }
     
     else{
      return '0'
     }

  }
  
    return (
        <div className="w-full  px-3 py-3 flex justify-between items-center rounded shadow-sm ...">
            <section className="flex w-3/5 space-x-40  ">
        <span className="w-1/4 capitalize text-2xl grid place-items-center ...">
            Curology
        </span>
    
            <ul className="flex justify-center items-center space-x-20">
                <li className=""><Link to="/">Home</Link></li>
                <li className=""><Link to="/Products">Products</Link></li>
                <li className="">Community</li>
            </ul>
            </section>
               {arr.length === 0?<article className="w-3/12 space-x-3">
               <button>
                   Register
               </button>

               <button className=" border-4 border-purple-500 border-opacity-75 px-3 py-3 rounded text-purple-500">
                 Login
               </button>
               </article>:
               <article className="w-3/12 space-x-4 flex items-center justify-center">
               <button className=" border-4 border-purple-500 border-opacity-75 px-3 py-3 rounded text-purple-500">
                 LogOut
               </button>
               <Link to="/Cart">
                 <span className="grid place-items-center">
                    <span className="relative "><RiShoppingBag2Fill className="h-8 w-8"/>
                          <div className="h-4 w-4  text-sm grid place-items-center left-5 absolute -top-1 text-white bg-purple-600 rounded-full ">{CartNum > 0?CartNum:CartData()}</div>
                       
                        </span>
                 </span>
                 </Link>
               </article> 
               
               
               
               }   
            
      
        </div>
    )
}
