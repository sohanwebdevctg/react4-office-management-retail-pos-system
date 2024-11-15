/* user data start */

const getUser = () => {

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return userInfo;

}

const setUser = (data) => {

  return localStorage.setItem('userInfo', JSON.stringify(data));
  
}


const removeUser = () => {
  return localStorage.removeItem('userInfo');
}
/* user data end */



export { getUser, setUser, removeUser }