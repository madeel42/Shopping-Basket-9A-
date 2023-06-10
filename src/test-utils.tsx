import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Card from '../src/Component/Cards/card.slice'
import Cart from '../src/Component/Carts/cart.slice'
import { BrowserRouter } from 'react-router-dom'
// import { getproductsSelector } from ''
// import { addProducts } from '../Carts/cart.slice'
// As a basic setup, import your same slice reducers


export function renderWithProviders(
    ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: {
                Card,
                Cart
            },
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: any) {
        return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>;
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}


// import React from 'react';
// import { render, RenderOptions } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom'
// import { store } from '../src/Store/store'
// const Wrapper: React.FC = ({ children }) => (
//     <BrowserRouter> <Provider store={store}>{children}</Provider></BrowserRouter>
// );;

// const customRender = (
//     ui: React.ReactElement,
//     options?: Omit<RenderOptions, 'wrapper'>
// ) => render(ui, { wrapper: Wrapper, ...options });
// export * from '@testing-library/react';
// export { customRender as render };  
