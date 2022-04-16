
export const loginReducer = (state = { data: [] } ,action) => {
    switch (action.type) {
      case "SET_LOGIN":
        
        return {...state, data: action.data}
    
      default:
        return state;
    }
  }