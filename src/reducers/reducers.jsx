export const initialState = {
    cart: [],
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload]};
        case 'REMOVE_FROM_CART':
            return { cart: [...state.cart.filter(item => item != action.payload)] };
        default:
            return state;
    }
}
export default reducers