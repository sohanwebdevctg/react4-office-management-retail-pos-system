import { useState } from 'react';
import { getUser } from '../utilities/localstorage';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    //user
    const [validUser, setValidUser] = useState(() => getUser());

    // checking user
    if(validUser?.userType === "admin"){
      return children;
    }else{
      return <Navigate to="/"></Navigate>
    }
};

export default AdminRoute;