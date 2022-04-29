const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type){
        case ADDITEM:
           return;
           break;
        case DELETEITEM:
           return;
           break;
        default:
            ;
    }
};
