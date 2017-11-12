
const defaultState = {
  products: [],
  colors: [],
  filterColor: [],
  inputValue: "",
  toggledFilterClass: [],
};

const reducer = (state = defaultState, action) => {
  if (action.type === "ADD_SEARCH") {
    return {...state, inputValue: action.inputValue}
  }
  if (action.type === "ADD_PRODUCTS") {
    return {...state, products: [...action.products]}
  }
  if (action.type === "ADD_COLORS") {
    return {...state, colors: [...action.colors]}
  }
  if (action.type === "ADD_FILTER_COLOR") {
    return {...state, filterColor: [...state.filterColor, action.filterColor]}
  }
  if (action.type === "TOGGLE_CLASS_COLOR") {
    return {...state, toggledFilterClass: [...state.toggledFilterClass, action.toggledFilterClass]}
  }
  if (action.type === "CLEAR_FILTER_COLORS") {
    console.log("HERE")
    return {...state, filterColor: [], toggledFilterClass: []}
  }
  return state;
}

export default reducer
