import { SET_DEVICES } from "../types/monitor";
const initState = {
    devices: []
}
export default (state = initState, action) => {
    switch(action.type) {
        case SET_DEVICES:
            return {...state, devices: action.payload.devices}
        default:
            return state
    }
}