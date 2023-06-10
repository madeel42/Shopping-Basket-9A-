import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { addProducts } from '../src/Component/Carts/cart.slice';
import { useGetData } from './Component/Cards/useGetData';
import { renderHook, act } from '@testing-library/react-hooks';
import { initialProduct } from './Component/Cards/products';
import { BrowserRouter } from 'react-router-dom';
import { Cards } from './Component/Cards/Cards';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  // useSelector: jest.fn()
}));

describe('render component', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/Flounce_High/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('handles add to cart button click', () => {
    const mockDispatch = jest.fn();
    jest.requireMock('react-redux').useDispatch.mockReturnValue(mockDispatch);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards />
        </BrowserRouter>
      </Provider>
    );

    const product = {
      id: 0,
      title: 'shirt',
      img: 'Basic_hollow.jpg',
      price: 45,
      desc:
        "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations",
    };

    const addToCartButton = screen.getByTestId('pr-0');
    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith(addProducts(product));
  });
});

test('renders hook', () => {
  const mockDispatch = jest.fn();
  jest.requireMock('react-redux').useDispatch.mockReturnValue(mockDispatch)
  const { result } = renderHook(() => useGetData(), {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  });

  const product = {
    id: 0,
    title: 'shirt',
    img: 'Basic_hollow.jpg',
    price: 45,
    desc:
      "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations",
  };

  act(() => {
    result.current.handleAddToCart(product);
  });
  expect(mockDispatch).toHaveBeenCalledWith(addProducts(product));
});



// import React from 'react';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { renderWithProviders } from './test-utils';

// import { Cards } from '../src/Component/Cards/Cards';

// import { Provider, useSelector } from 'react-redux'
// import { store } from './Store/store'
// import { addProducts } from '../src/Component/Carts/cart.slice';
// import { useGetData } from './Component/Cards/useGetData';
// import { renderHook } from '@testing-library/react-hooks';
// import { act } from 'react-dom/test-utils';
// import { initialProduct } from './Component/Cards/products';
// import { BrowserRouter } from 'react-router-dom';

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(),
//   // useSelector: jest.fn()
// }));


// describe("render component", () => {

//   let renderComponent;
//   let getByText: Function;
//   let getByTestId: Function;
//   renderComponent = renderWithProviders(<Cards />);

//   getByText = renderComponent.getByText;
//   getByTestId = renderComponent.getByTestId;



//   // beforeEach(() => {
//   //   (useSelector as jest.Mock).mockImplementation(callback => {
//   //     return callback(initialProduct);
//   //   });
//   // });
//   // afterEach(() => {
//   //   (useSelector as jest.Mock).mockClear();
//   // });

//   test('renders learn react link', () => {

//     const linkElement = getByText(/Flounce_High/i);
//     expect(linkElement).toBeInTheDocument();
//   });
//   test('handles add to cart button click', () => {

//     const mockDispatch = jest.fn();
//     jest.requireMock('react-redux').useDispatch.mockReturnValue(mockDispatch);
//     renderWithProviders(

//       <Cards />

//     );

//     // Mock product data
//     const product = {
//       id: 0,
//       title: 'shirt',
//       img: 'Basic_hollow.jpg',
//       price: 45,
//       desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
//     };

//     // Find the "Add to Cart" button and click it
//     const addToCartButton = getByTestId('pr-0');
//     fireEvent.click(addToCartButton);

//     // Assert that the dispatch function was called with the addProducts action
//     store.dispatch(addProducts(product))
//     expect(mockDispatch).toHaveBeenCalledWith(addProducts(product));
//   });

// })

// test('renders hook', () => {
//   const wrapper = ({ children }: any) => (
//     <BrowserRouter><Provider store={store}>
//       {children}
//     </Provider></BrowserRouter>
//   );
 

//   render(<Cards />, { wrapper });

//   const { result } = renderHook(() => useGetData());
//   const product = {
//     id: 0,
//     title: 'shirt',
//     img: 'Basic_hollow.jpg',
//     price: 45,
//     desc:
//       "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations",
//   };

//   act(() => {
//     result.current.handleAddToCart(product);
//   });
// });