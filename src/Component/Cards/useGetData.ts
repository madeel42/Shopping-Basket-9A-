import { getproductsSelector } from './card.slice'
import { addProducts } from '../Carts/cart.slice'
import { useAppDispatch, useAppSelector } from '../../Store/Store.hooks'
import { useStore } from 'react-redux';
// import { store } from '../../Store/store'
import { Products } from './products'

export const useGetData = () => {
    const state = useStore().getState();
    // const state = store.getState();
    console.log(useStore(), "sfsdsdsdsdsd");
    const useSelector = useAppSelector(state => state.Card)
    const Dispatch = useAppDispatch()
    const handleAddToCart = (e: Products) => {
        console.log(e, 'eeeeeeeeeeeeee')
        // Add to cart          
        Dispatch(addProducts(e))
    }
    console.log(useSelector, 'useSelectoruseSelector')
    // const useSelectorcart = useAppSelector(state => state.Cart)
    // console.log(useSelectorcart, 'useSelectorcart');
    return {
        useSelector,
        handleAddToCart
    }
}