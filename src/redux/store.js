
import { combineReducers, createStore } from "redux";
import { basketReducer } from "./basketReducer";
import { loginReducer } from "./loginReducer";
import { pizzaReducer } from "./pizzaReduser";


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    basket:basketReducer,
})

export const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('basket', JSON.stringify(state.basket.data) || [])
})

window.store = store;
