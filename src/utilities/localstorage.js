/* user data start */

const getUser = () => {

  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
  return userInfo;

}

const setUser = (data) => {

  let previousUser = getUser();

  previousUser.push(data);
  localStorage.setItem('userInfo', JSON.stringify(previousUser));
  
}

const deleteUser = (id) => {
  const getPreviousUser = getUser();
  const newUser = getPreviousUser.filter((data) => data.id !== id  );
  localStorage.setItem('userInfo', JSON.stringify(newUser));
}

const removeUser = () => {
  return localStorage.removeItem('userInfo');
}
/* user data end */



/* data add in cart start */
const getCartData = () => {

  const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
  return cartData;

}

const setCartData = (data) => {

  let previousData = getCartData();

  // set new data with previous data
  previousData.push(data);
  localStorage.setItem('cartData', JSON.stringify(previousData));

}

const removeCartData = () => {
  return localStorage.removeItem('cartData');
}

/* data add in cart end */


export { getUser, setUser, deleteUser ,removeUser, getCartData, setCartData, removeCartData }