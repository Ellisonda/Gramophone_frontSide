import { combineReducers } from "redux";
import userReducer from "../../../components/user/UserReducer";
import productReducer from "../../../components/products/ProductsReduces";




const reducer = combineReducers({
    userReducer,
    productReducer
})

export default reducer;