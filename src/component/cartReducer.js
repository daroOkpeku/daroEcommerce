export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_CART":
      return { cartData: action.payload };

    default:
      return state;
  }
}
