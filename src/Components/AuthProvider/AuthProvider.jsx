import { useState } from "react";
import { createContext } from "react";
import { getUser } from "../../utilities/localstorage";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  //user
  const [validUser, setValidUser] = useState(() => getUser());

  const userInfo = {validUser, setValidUser}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;