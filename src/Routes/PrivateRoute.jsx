import { useContext} from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {

  // get user data
  const {validUser} = useContext(AuthContext);

  // checking user
  if(validUser?.name && validUser?.email && validUser?.userType){
    return children;
  }else{
    return <Navigate to="/login"></Navigate>
  }
  
};

export default PrivateRoute;