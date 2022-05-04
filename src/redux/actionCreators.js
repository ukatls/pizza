import Api  from "../api/Api"
import { SET_NEW_PIZZA, SET_PENDING, SET_PIZZA, SET_PIZZAS, AUTH_SUCCESS } from "./actionType"

export const ACsetPizzas = (data) => ({
    type: SET_PIZZAS,
    data: data
})

export const setPizzaAC = (data) => ({
    type: SET_PIZZA,
    payload: data
})

export const ACsetPending = () => ({
    type: SET_PENDING
})

export const ACsetNewPizza = (data) => ({
    type: SET_NEW_PIZZA,
    data: data
})
export const setAuthAC = (data) => ({
    type: AUTH_SUCCESS,
    data: data
})

export const getPizzaAC = () => {
    return async (dispatch) => {
        const res = await Api.getPizzas()
        dispatch(ACsetPending())    // .finally(()=>{dispatch(ACsetPending())})
        if(res.status === 200){
            dispatch(ACsetPizzas(res.data));    // .then((response) => { dispatch(ACsetPizza(response.data));});
        }
    }
}

export const authAC = (data) => {
    return async (dispatch) => {
        Api.auth(data)
        .then((resp) => { 
            console.log(resp);
            if(resp.data?.token){
                dispatch(setAuthAC(resp.data));
            }
        });
    }
}

