import { createStore, combineReducers } from "redux";

const initialState = {
    cart: [],
    userInfo: {
        userName: "",
        userPassword: "",
    },
};

function cart(state = initialState.cart, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const alreadyInCart = !!state.find(
                (item) => item.productName === action.data.productName
            );
            if (alreadyInCart) {
                return state.map((item) => {
                    if (item.productName === action.data.productName) {
                        item.quantity++;
                    }
                    return item;
                });
            } else {
                const updatedState = [...state, action.data];
                return updatedState;
            }
        case "REMOVE_FROM_CART":
            const reupdatedState = state.filter(
                (product) => product.productName !== action.data.productName
            );
            return reupdatedState;
        case "EMPTY_CART":
            return initialState.cart;
        default:
            return state;
    }
}

function userInfo(state = initialState.userInfo, action) {
    switch (action.type) {
        case "SET_CREDENTIALS":
        case "SET_USER_NAME":
        case "SET_USER_PASSWORD":
            const updatedUserState = { ...state, ...action.data };
            return updatedUserState;
        case "REMOVE_CREDENTIALS":
            // const reupdatedUserState = state.filter(
            //     (user) =>
            //         user.userName !== action.data.userName &&
            //         user.userPassword !== action.data.userPassword
            // );
            // return reupdatedUserState;
            return initialState.userInfo;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ cart, userInfo });
const store = createStore(rootReducer, initialState);

export default store;
