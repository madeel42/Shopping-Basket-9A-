import React from 'react'
import classes from './header.module.css'
import Logo from '../../assets/logo.png'
import {
    Link
} from 'react-router-dom'
import { getcartProduct } from '../Carts/cart.slice'
import { useAppSelector } from '../../Store/Store.hooks'
export const Head: React.FC = () => {
    const cartData = useAppSelector(getcartProduct)
    return <>
        <div className={classes.MainWrapper}>
            <Link to="/"> <img className={classes.logostyle} src={Logo} alt='logo img' /></Link>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/cart"> <li>Cart <span className={classes.ITEMSCOUNT}>{cartData && cartData ? cartData.length : 0}</span></li></Link>
            </ul>
        </div>
    </>
}