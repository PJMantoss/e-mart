const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type){
        case ADDITEM:
            //Check if Product Already Exist
            const exist = state.find(x => x.id === product.id)
           if(exist){
            return state.map(x => x.id === product.id ? {} : x)
           }
           break;
        case DELETEITEM:
           return;
           break;
        default:
            ;
    }
};
