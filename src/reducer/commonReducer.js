export const cartData = (state = {isLoggedIn: false}, action) => {
  switch (action.type) {
    case 'CART_DATA':
      return {...state, ...action.params};
    default:
      return state;
  }
};
