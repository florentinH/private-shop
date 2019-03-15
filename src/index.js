import React from 'react'
import ReactDOM from 'react-dom';
import Header from './components/shared/Header/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shops from "./components/Shops/Shops"
import shopForm from './containers/Shop/ShopForm';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>

                <Switch>
                    <Route path="/" component={Shops} exact />
                    <Route path="/ajout" component={shopForm} exact />
                </Switch>
            </div>        
        </BrowserRouter>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)