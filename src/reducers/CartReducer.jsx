// cartReducer.js
const initialState = {
    cartItems: [], // Initial cart state
};
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddtoCart1':
            console.log(action.payload);
            return {
                ...state,
                cartItems:  [...state.cartItems, { ...action.payload, isAddToCart: true, quantity: 1 }] 
            }; 
        case 'RemoveFromCart1':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
              };          
        case 'AddQuantity':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case 'MinusQuantity':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                )
            };
        default:
            return state;
    }
};
  
export default cartReducer;
