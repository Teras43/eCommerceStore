import { createStore, combineReducers } from "redux";

const initialState = {
    cart: [],
};

function cart(state = initialState.cart, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const updatedState = [...state, action.data];
            return updatedState;
        case "REMOVE_FROM_CART":
            const reupdatedState = state.filter(
                (product) => product.title !== action.data.title
            );
            return reupdatedState;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ cart });
const store = createStore(rootReducer, initialState);

export default store;
