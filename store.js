import { createStore, combineReducers, applyMiddleware } from 'redux'
import monitorReducer from './reducers/monitor'
import shoppingReducer from './reducers/shopping'
import serviceReducer from './reducers/service'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    monitorReducer,
    shoppingReducer,
    serviceReducer
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;