import { AUTH_SUCCESS } from "./actionType"

const initialState = {
    data: JSON.parse(localStorage.getItem('auth'))
}
export const authReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, data: action.data}
        default:
            return state
    }
}