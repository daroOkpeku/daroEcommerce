import React, {useState, useEffect} from 'react'
import Item from './component/Item'
import axios from 'axios'
import Sideshow from './component/Sideshow';
export default function Products() {
   const[good, SetGood] = useState([]);
   const [select, SetSelect] = useState();
   const [Data, SetData] = useState([]);
   const [search, SetSearch] = useState();
   const [Collector, SetCollector ] = useState([]);
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    useEffect(()=>{

        axios.get(url)
        .then(res=>{
          let drinks = res.data.drinks
          SetGood(drinks);
   
        })
        .catch(error=>console.log(error))

    }, [])

    let securl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${select}`;
    useEffect(()=>{
      axios.get(securl)
      .then(Response=>{
         //console.log(Response.data.drinks)
        // SetData(Response.data.drinks)
        if(Response.data.drinks){
          // localStorage.setItem('data', JSON.stringify(Response.data.drinks))
          SetData(Response.data.drinks)
        }
       
      })
      .catch(error=>console.log(error))
    },[select]) 

   useEffect(()=>{
    // console.log(Data)
   }, [Data])

   const handleSearch = (e)=>{
      let find = e.target.value
      // let identity =   good.filter(item=>item.strDrink.toLowerCase() === find)

      // console.log(identity)

    if(find !== ""){
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${find}`;
     axios.get(url)
     .then(res=>{
        let looking = res.data.drinks
        if(looking){
           SetCollector(looking);
        }
    
       
     
  
     })
     .catch(error=>console.log(error))
    }else{
      SetCollector(good);
    }    
   }  



  useEffect(()=>{

  },[Collector])

    return (
        <div className="px-2 py-2">

         <article className="w-3/12   float-left ...">
           <div className="w-full grid place-items-center mt-3 ...">
             <article className="flex justify-items-center items-center" >
           Stephen
           </article>
           </div>
           <aside className="w-full grid place-items-center mt-10 ...">
             <h2>Fliter</h2>

             <ul className="mt-2">
                <li className="m-2"><input type="checkbox"/>Tv's</li>
                <li className="m-2"><input type="checkbox"/>Phone</li>
                <li className="m-2"><input type="checkbox"/>Camera</li>
                <li className="m-2"><input type="checkbox"/>Watch</li>
                <li className="m-2"><input type="checkbox"/>Clothes</li>
             </ul>
           </aside>

           <section className="w-full grid place-items-center">
            <h3 className="mt-4">Price Range</h3>
            <span className="flex space-x-2  items-center mt-4">
            <input type="number" placeholder="min" className="w-20"/> <input type="number" className="w-20" placeholder="max"/>
            </span>
            <button type="button" className="px-2 py-2 bg-indigo-400 text-white mt-4 w-32 rounded">Set Price</button>
           </section>

           <section className="w-full grid place-items-center mt-3">
            <p>Rating</p>
            <span><input type="checkbox"/></span>
           </section>

           <aside className="w-full grid place-items-center mt-3">
                something will be here
           </aside>


         </article>


         <div className="w-3/4  px-2 py-2   float-right flex justify-between items-center    ...">
           
           <article className=" float-left w-4/5 px-6 px-6 h-screen  ...">
              
              <div className="w-full grid place-items-center py-2 px-2  ...">
                <input type="text" className="w-5/6 mt-2 border border-purple-300 rounded  px-1 py-1" name="search" id="search" placeholder="search for an item" onChange={handleSearch} value={search} autoComplete="off"/>
              </div>
               <section className="w-full space-x-10 px-2 py-2  mt-2">
                   <button type="button" className="py-2 px-2 w-20">sort</button>
                   <button type="button" className="py-2 px-2 w-36 border border-purple-500 text-purple-500 rounded">Relevance</button>
                   <button type="button" className="py-2 px-2 w-36 border border-purple-500 text-purple-500 rounded">Popular</button>
                   <button type="button" className="py-2 px-2 w-36 border border-purple-500 text-purple-500 rounded">Most New</button>
               </section>
              <article className="w-full  py-3 px-3 mt-2 overflow-y-auto h-96 mt-2  ...">
                      <Item  all={Collector} good={good}  SetSelect={SetSelect} />
                     
                  

              </article>

           </article>

           {Data.map((item, index)=><Sideshow key={index} each={item}/>)}
               
         </div>

         


        </div>
    )
}
