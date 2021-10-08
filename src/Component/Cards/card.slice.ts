import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../Store/store'
import { initialProduct } from './products'
export const CardSlice = createSlice({
    name: 'products',
    initialState: initialProduct,
    reducers: {
        // addProduct: (state, action) => {
        //     return
        // }
    },
})
// export const { addProduct } = CardSlice.actions
export const getproductsSelector = (state: RootState) => state.Card;
export default CardSlice.reducer;