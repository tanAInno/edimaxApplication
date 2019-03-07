import { SET_SHOPPING } from "../types/shopping";
export const setShopping = (shoppings) => {
    return dispatch => {
        dispatch({
            type: SET_SHOPPING,
            payload: { shoppings }
        })
    }
}