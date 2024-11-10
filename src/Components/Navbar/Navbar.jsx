
import { useState } from "react";
import {  getUser } from "../../utilities/localstorage";

// import logoImg from '../../../public/logo/logo.png'


const Navbar = ({active,toggleSideBar}) => {


  // user data
  const [user, setUser] = useState(() => getUser());

  


  

  return (
    <>
      {/* content section start */}
      <div className="bg-slate-400 h-full flex flex-col justify-around items-center">
        <div>
          {
            active ? <button onClick={() => toggleSideBar(!active)} className="btb btn-primary">open</button> : <button onClick={() => toggleSideBar(!active)} className="btb btn-primary">close</button>
          }
          
          
        </div>
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
        </ul>
        <div>
          <button className="btb btn-primary">close</button>
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Navbar;
