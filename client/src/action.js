export const addSearch = (inputValue) => {
  return ({
    type: "ADD_SEARCH",
    inputValue: inputValue
  })
}

export const addProducts = (products) => {
  return ({
    type: "ADD_PRODUCTS",
    products: products
  })
}

export const addColors = (colors) => {
  return ({
    type: "ADD_COLORS",
    colors: colors
  })
}

export const addFilterColor = (color) => {
  return ({
    type: "ADD_FILTER_COLOR",
    filterColor: color
  })
}

export const toggleClassColor = (color) => {
  return ({
    type: "TOGGLE_CLASS_COLOR",
    toggledFilterClass: color
  })
}

export const ClearFilterColors = () => {
  return ({
    type: "CLEAR_FILTER_COLORS",
  })
}
