// For Add Item to Cart
/*export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}*/








// For Add Item to Cart
export const addCart = (product) => (dispatch, getState) => {
    dispatch({
        type: "ADDITEM",
        payload: product,
    });
    localStorage.setItem('cart', JSON.stringify(getState().handleCart));
};

// For Delete Item from Cart
export const delCart = (product) => (dispatch, getState) => {
    dispatch({
        type: "DELITEM",
        payload: product,
    });
    localStorage.setItem('cart', JSON.stringify(getState().handleCart));
};

// Set initial cart state from local storage
export const setCart = (cart) => {
    return {
        type: "SET_CART",
        payload: cart,
    };
};
