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
