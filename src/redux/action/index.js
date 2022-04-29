// Add Item to Cart 
export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
};