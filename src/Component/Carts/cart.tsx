import React from 'react'
import classes from './Carts.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getcartProduct, getTotalPrice, resetCart } from './cart.slice'
import { useAppSelector, useAppDispatch } from '../../Store/Store.hooks'
import { addProducts, RemoveFromCart } from './cart.slice'
import { useHistory } from "react-router";
import { Products } from '../Cards/products';
export const Cart: React.FC = () => {
    const cartData = useAppSelector(getcartProduct)
    console.log(cartData,"cartDatacartData")
    const totalPrice = useAppSelector(getTotalPrice)
    const dispatch = useAppDispatch()
    const history = useHistory();
    const notify = () => {
        dispatch(resetCart([]))
        toast.success('Thanks For Purchase!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        if (cartData.length !== 0) {
            history.push({
                pathname: "/",
            });
        }
        // if (cartData.length !== 0) {
        //     // history.push('/')
        // }
    }
    const handleAdd = (e: Products) => {
        dispatch(addProducts(e))
    }
    const handleRemove = (e: number) => {
        dispatch(RemoveFromCart(e))

    }
    return <>
        {cartData?.length !== 0 ? cartData?.map((item, i) => {
            return <div className={classes.CARTWRAPPER} key={i}>
                <div className={classes.PARENT}>
                    <div className={classes.IMGDIV}> <img src={item.img} className={classes.CARTIMG} alt="" /></div>
                </div>
                <div className={classes.DESCRIPION}><p>{item.desc}</p></div>
                <div className={classes.PRICE}>{item.price * item.count}/Rs</div>
                <div className={classes.OPERATORS}><button onClick={() => handleAdd(item)}>+</button><p>{item.price * item.count}/Rs</p><button onClick={() => handleRemove(item.id)}>-</button></div>
            </div>
        }) : <h2 style={{ textAlign: 'center' }}>No Product in Cart</h2>}
        {cartData.length !== 0 && <div className={classes.TOTALPRICE}>Total Price={totalPrice}/Rs</div>}
        {cartData.length !== 0 && <div className={classes.BUTTON}><button onClick={notify}>Purchase</button></div>}

        <ToastContainer />
    </>
}