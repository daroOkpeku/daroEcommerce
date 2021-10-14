import React,{createContext, useState} from 'react'
 const context = createContext();
export default function Provider({children}) {
  const [CartNum, SetCartNum] = useState();
  const [Total, SetTotal] = useState();
  let cartData =  localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    return (
       <context.Provider value={{ 
           cartData:cartData,
           SetCartNum:SetCartNum,
           CartNum:CartNum,
           Total:Total,
           SetTotal:SetTotal
        }}>
         {children}
       </context.Provider>
    )
}

export {Provider, context}
