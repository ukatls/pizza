import { AUTH_SUCCESS, SET_PENDING } from "./actionType"

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
        case SET_PENDING:
            return {...state, pending: false}
        default:
            return state
    }
}