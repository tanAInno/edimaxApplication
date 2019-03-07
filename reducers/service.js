import { SET_SERVICE } from "../types/service";
const initState = {
    service: []
}
export default (state = initState, action) => {
    switch(action.type) {
        case SET_SERVICE:
            return {...state, service: action.payload.service}
        default:
            return state
    }
}