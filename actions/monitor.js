import { SET_DEVICES } from "../types/monitor";
export const setDevices = (devices) => {
    return dispatch => {
        dispatch({
            type: SET_DEVICES,
            payload: { devices }
        })
    }
}