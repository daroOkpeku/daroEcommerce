import './App.css';
import React, {  useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { FaDiceD6 } from "react-icons/fa";
import imageOne from  './image/ecommerce-2140603_1280.jpg';
import imageTwo from './image/store-984393_1280.jpg';
import Recent from './component/Recent';
import Footer from './component/Footer';
function Home() {

 
   let picture = [
        imageOne,
        imageTwo,
    
    ]
   let p = 0;
    function slider(){
      document.querySelector(".pic img").src = picture[p];

  if(p < picture.length -1){
   p++;
  }else{
   p=0;
  }
}

useEffect(()=>{
 const interval =  setInterval(()=>{
    slider();
}, 3500)
return ()=> clearInterval(interval);
},[])


  return (
    <div className="App">
    
    <section className="w-full  mt-2 grid place-items-center px-3 py-3 ...">
      <article className="w-11/12 border border-light-blue-500 rounded relative ...">

        <section className="pic h-2/5 rounded ...">
          <img className="rounded h-2/5 object-cover" src={imageTwo} alt=""/>
        </section>

        <article className=" absolute z-10 top-0 w-full  py-2 px-2 ...">
       
       <div className="float-left w-2/5  px-10 py-10 ...">
         <span className="text-6xl mt-10 text-white capitalize px-2 py-2">
           shopping to
           stay happy
           </span>

          <section className="mt-10 text-white px-2 py-2 text-sm">
        Direct malling return on investment prototype ownership mass
        market buyer interaction design product 
        </section>

        <article className="mt-10 text-white px-2 py-2 ">
          <button className=" w-1/3 py-3 px-3 border-2 border-light-white-500 rounded">Shop Now </button>
        </article>


        <article className="mt-10 text-white px-2 py-2 flex items-center">
          <FaDiceD6 className="h-10"/>  |  Award Winning 24/7 Customer Service
        </article>

       </div>

        </article>

      </article>
    </section>
    <Recent />
   <Footer />
 </div>
  );
}

export default Home;
