import React,{createContext} from 'react'
 const context = createContext();
export default function Provider({children}) {
  let cartData =  localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    return (
       <context.Provider value={{ 
           cartData:cartData
        }}>
         {children}
       </context.Provider>
    )
}

export {Provider, context}
