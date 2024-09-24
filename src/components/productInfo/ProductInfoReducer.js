import {MODIFY_PRODUCT} from './ProductInfoAction'

const initialState = {
    products: undefined
}
 const productModifyReducer =(state= initialState, action) => {
    switch(action.type) {
        case MODIFY_PRODUCT:
        return {
            ...state,
            product: action.payload.product
        }
        default:
            return state
    }
}

export default productModifyReducer