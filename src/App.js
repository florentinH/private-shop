import React from 'react'
import Header from './components/shared/Header/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shops from "./components/Shops/Shops"
import shopForm from './containers/Shop/ShopForm';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header></Header>
    
                    <Switch>
                        <Route exact path="/" component={Shops} />
                        <Route path="/ajout" component={shopForm} />
                    </Switch>
                </div>        
            </BrowserRouter>
        )
    }
    
}


export default App