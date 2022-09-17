import { combineReducers } from 'redux'
import userReducers from './slices/userSlice'

const rootReducers = combineReducers({
    auth: userReducers,
})

export default rootReducers