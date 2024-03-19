// productReducers.js
import product from '../Stores/Products.json';

const initialState = {
  products: product.products.map(product => ({
    ...product,
    isAddToCart: false,
    quantity: 0,
    isExpand: true
  }))
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'AddtoCart':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? { ...product,isAddToCart: true } : product
        )
      };
    case 'RemoveFromCart':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload ? { ...product, isAddToCart: false, quantity: 0 } : product
        )
      };
    case 'expand' : 
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload ? {...product,isExpand : !product.isExpand} : product)
      };
    default:
      return state;
  }
};

export default productReducers;