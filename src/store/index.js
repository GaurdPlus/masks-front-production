import authReducer from './auth/reducer'
import cartReducer from './Cart/reducer'
// import requestReducer from './requests'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    // requests: requestReducer,
})

export default rootReducer