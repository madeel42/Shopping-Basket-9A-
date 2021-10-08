import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../Store/store';
import { Products } from '../Cards/products'
interface CartProduct extends Products {
    count: number
}
const CartSlice = createSlice({
    name: 'Cart',
    initialState: [] as CartProduct[],
    reducers: {
        addProducts: (state, action: PayloadAction<Products>) => {
            let isPro = state.findIndex(product => product.id === action.payload.id)
            if (isPro !== -1) {
                state[isPro].count += 1
            } else {
                state.push({ ...action.payload, count: 1 })
            }

        },
        RemoveFromCart: (state, action: PayloadAction<number>) => {
            let ispro = state.findIndex(product => product.id === action.payload)
            console.log(ispro);

            if (state[ispro].count > 1) {
                state[ispro].count -= 1
            } else {
                return state.filter(item => item.id !== action.payload)
            }
        },
        resetCart: (state, action: PayloadAction<[]>) => {
            return state = action.payload
        }
    }


})
export const { addProducts, RemoveFromCart, resetCart } = CartSlice.actions
export const getcartProduct = (state: RootState) => state.Cart
export const getTotalPrice = (state: RootState) => state.Cart.reduce((acc, next) => acc + (next.count * next.price), 0)

export default CartSlice.reducer