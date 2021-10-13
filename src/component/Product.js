import React,{useState} from 'react';


export default function Product(props) {
    const[cool, setCool] = useState({show:false});
    const {id, picture, name, price} = props.item;
  

    const MouseOver = (e)=>{
        setCool({
            show:true
        })
             
       }
     
        const MouseLeave = ()=>{
            setCool({
                show:false
            })
        }

    return (
        <aside  className="h-1/3 w-1/5 py-2 px-2 rounded shadow-lg ...">
        <div onMouseEnter={MouseOver} onMouseLeave={MouseLeave} className="w-full relative">
            <img src={picture}  className="w-full"/>
            <section className={cool.show?"absolute steve rounded grid place-items-center w-full h-full top-0" : "absolute rounded  w-full h-full top-0"} >
              <span id="price"  className={cool.show?"hidden":"bg-black text-white float-left px-1 py-1 rounded-br-2xl"}>
                  <p>{price}</p>
                  <p>per unit</p>
              </span>
                 <button className={cool.show?"text-white rounded py-3 px-3 border-2 border-light-white-500 ":"hidden"} >Product</button>
            </section>
        </div>
        <label className="w-full grid place-items-center">{name}</label>
     </aside>
    )
}
