import { SET_SERVICE } from "../types/service";
export const setService = (service) => {
    return dispatch => {
        dispatch({
            type: SET_SERVICE,
            payload: { service }
        })
    }
}