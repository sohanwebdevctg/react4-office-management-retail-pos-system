import { useState } from "react";
import { getUser } from "../utilities/localstorage";
import { Navigate} from "react-router-dom";


const PrivateRoute = ({children}) => {

  // user data
  const [user, setUser] = useState(() => getUser());

  if(user.email && user.user){
    return children;
  }else{
    return <Navigate to="/login"></Navigate>
  }
  
};

export default PrivateRoute;