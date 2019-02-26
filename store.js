import { createStore, combineReducers, applyMiddleware } from 'redux'
import monitorReducer from './reducers/monitor'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    monitorReducer,
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;