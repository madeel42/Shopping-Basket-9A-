import { configureStore } from '@reduxjs/toolkit'
// ...
import Card from './../Component/Cards/card.slice'
 import Cart from './../Component/Carts/cart.slice'
export const store = configureStore({
  reducer: {
    Card,
    Cart
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch