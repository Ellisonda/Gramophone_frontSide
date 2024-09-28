import  {LOAD_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCT_BY_STYLE} from "./ProductActions";


const initialState = {
    products: undefined,
    product: undefined
}

const productReducer = (state= initialState,action) => {
    switch(action.type) {
        case LOAD_PRODUCTS: 
        return {
            ...state,
            products: action.payload.products
        }
        case GET_PRODUCT_BY_ID: 
        return {
            ...state,
            product: action.payload.product
        }
        case GET_PRODUCT_BY_STYLE:
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state
    }
}

export default productReducer