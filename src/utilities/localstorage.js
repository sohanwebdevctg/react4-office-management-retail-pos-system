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

const removeUser = () => {
  return localStorage.removeItem('userInfo');
}
/* user data end */



/* data add in cart start */
const getData = () => {

  const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
  return cartData;

}

const setData = (data) => {

  let previousData = getData();

  // set new data with previous data
  previousData.push(data);
  localStorage.setItem('cartData', JSON.stringify(previousData));

}

const removeData = () => {
  return localStorage.removeItem('cartData');
}

/* data add in cart end */


export { getUser, setUser, removeUser, getData, setData, removeData }