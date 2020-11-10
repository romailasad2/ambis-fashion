import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { Homepage } from './Components/Pages/Homepage/Homepage.component';

import ShopPage from './Components/Pages/Shop/Shoppage.component';

const Hats = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
)

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                <Route exact path='/' component={ Homepage }/>
                <Route path='/shop' component={ ShopPage }/>
                </Switch>
            </div>
        )
    }
}

export default App;