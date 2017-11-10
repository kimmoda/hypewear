
const defaultState = {
  products: [],
  inputValue: "",
  colorFilter: ""
};

const reducer = (state = defaultState, action) => {
  if (action.type === "ADD_SEARCH") {
    return {...state, inputValue: action.inputValue}
  }
  if (action.type === "ADD_PRODUCTS") {
    return {...state, products: [...action.products]}
  }
  return state;
}

export default reducer
