const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type){
        case ADDITEM:
            //Check if Product Already Exist
            const exist = state.find(x => x.id === product.id)
           if(exist){
               //Increase the Quantity
            return state.map(x => x.id === product.id ? {...x, qty: x.qty + 1} : x);
           } else {
               const product = action.payload;
               return [];
           }
           break;
        case DELETEITEM:
           return;
           break;
        default:
            ;
    }
};
