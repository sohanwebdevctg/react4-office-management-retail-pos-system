import { useState} from "react";
import { Navigate} from "react-router-dom";
import { getUser } from "../utilities/localstorage";


const PrivateRoute = ({children}) => {

  //user
  const [validUser, setValidUser] = useState(() => getUser());

  // checking user
  if(validUser?.name && validUser?.email && validUser?.userType){
    return children;
  }else{
    return <Navigate to="/login"></Navigate>
  }
  
};

export default PrivateRoute;