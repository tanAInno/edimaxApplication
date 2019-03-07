import { SET_SHOPPING } from "../types/shopping";
const initState = {
    shoppings: []
}
export default (state = initState, action) => {
    switch(action.type) {
        case SET_SHOPPING:
            return {...state, shoppings: action.payload.shoppings}
        default:
            return state
    }
}