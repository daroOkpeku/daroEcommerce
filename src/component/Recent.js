import React,{useState} from 'react'
import { uuid } from 'uuidv4';
import Product from '../component/Product'
let arr = [
    {
      id:uuid(),
      picture:'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_1280.png',
      name:'smart tv',
      price:'500',
      show:false
    },

    {
        id:uuid(),
        picture:'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_1280.png',
        name:'samsung',
        price:'600',
        show:false
    },
    {
      id:uuid(),
      picture:'https://cdn.pixabay.com/photo/2017/04/07/12/58/lion-2210947_1280.jpg',
      name:'Lion tv',
      price:'700',
      show:false
    }
  ];

export default function Recent() {
  const[status, setStatus] = useState(arr);


  
      
    return (
        <div className="mt-4 grid place-items-center ">
            <section className="capitalize text-indigo-600 text-5xl">Recent Product</section>

            <article className="mt-2 w-11/12 py-3 px-3 flex  justify-between rounded shadow">
              {status.map(one=><Product item={one} key={one.id} /> )}   
            </article>
            
        </div>
    )
}
