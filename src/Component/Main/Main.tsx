import React from 'react'
import { Head } from '../Header/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import {Cart} from '../../Component/Carts/cart'
import { Cards } from '../Cards/Cards'
import {Details} from '../Details/Details'
export const Main = () => {
    return (
        <div>
            <Router>
                <Head />
                <Switch>
                    <Route exact path="/" component={Cards} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/items/:slug" component={Details} />
                </Switch>
            </Router>
        </div>
    )
}