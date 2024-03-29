import React from 'react'
import classes from './cards.module.css'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../Store/Store.hooks'
import { Products } from './products'
import { getproductsSelector } from './card.slice'
import { addProducts } from '../Carts/cart.slice'
import { useGetData } from './useGetData'

export const Cards = () => {

    const { useSelector, handleAddToCart } = useGetData()
    // const Dispatch = useAppDispatch()
    // console.log(useSelector);
    // const handleAddToCart = (e: Products) => {
    //     // Add to cart
    //     Dispatch(addProducts(e))
    // }
    let CARDS = useSelector.map((product:Products) => {
        return <div className={classes.Child} key={product.id}><Link to={`/items/${product.id}`}><div className={classes.IMGDIV}><img src={product.img} alt="" /></div></Link>
            <div className={classes.CardFooter}><p>{product.title}</p>
                <button data-testid={`pr-${product.id}`} onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
    })
    return (
        <div className={classes.MainWrapper}>
            {CARDS}
        </div>


    )
}