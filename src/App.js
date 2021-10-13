import React from 'react'
import Home from './Home'
import Products from './Products'
import Navbar from './Navbar/Navbar'
import Singleproduct  from './Singleproduct'
import Error from './Error'
import Cart from './Cart'
import {  Route, Switch } from 'react-router-dom'
export default function App() {
    return (
        <div>
              <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Products" component={Products}/>
                <Route exact path="/Products/:Single"  component={Singleproduct} />
                <Route exact path="/Cart"  component={Cart} />
                 <Route exact path="*"  component={Error} />
            </Switch>
        </div>
    )
}
