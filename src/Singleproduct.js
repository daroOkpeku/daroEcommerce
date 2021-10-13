import React, {useState, useEffect} from 'react';
import Single from './component/Single';
import axios from 'axios';
import { Redirect } from "react-router-dom";
export default function Singleproduct(props) {
    const [data, SetData] = useState([]);
  let single = props.match.params.Single
 
   
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${single}`;
        useEffect(()=>{
    if(single){
     axios.get(url)
     .then(res=>{
        let drinks  =  res.data.drinks;
        if(drinks){
           
            SetData(drinks)
        } else if(res.data.length === 0 || drinks === null){
              window.location.href='/Error';
        }
       
     })
     .catch(error=>console.log(error))
    }
    },[])

    return (
        <div>

        {data.map(item=><Single key={item.idDrink} item={item}/>)}     
        </div>
    )
}
