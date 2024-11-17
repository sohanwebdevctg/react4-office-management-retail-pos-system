import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import { getUser, removeUser } from "../../utilities/localstorage";
import Swal from "sweetalert2";


const Header = () => {

  const [toggle, setToggle] = useState(false);

  // get user data
  const [validUser, setValidUser] = useState(() => getUser());

  //logout function
  const logOutFun = () => {
    removeUser();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "You are now Logged out",
      showConfirmButton: false,
      timer: 1000,
    });
    location.reload();
  }

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0){
        setActive(true);
      }else{
        setActive(false);
      }
    })
  })



  return (
    <>
      {/* content section start */}
      <div className={`${active ? 'fixed top-0 right-0 left-0 z-50 shadow-md': 'sticky '}`}>
      <div className="w-full h-14 bg-green-500 mb-1 flex justify-between items-center px-3 xl:px-5">
        <div>
          <h2 className="text-lg xl:text-xl text-white font-bold italic">Retail-pos</h2>
        </div>
        <div className="flex justify-center items-center gap-2">
        {
            toggle ? <IoClose onClick={() => setToggle(!toggle)} className=" text-black text-xl sm:hidden"></IoClose> : <GiHamburgerMenu onClick={() => setToggle(!toggle)} className=" text-black text-base sm:hidden"></GiHamburgerMenu>
        }
        <Link to="/user-profile">
        <div className="w-7 lg:w-9 rounded-full">
          <img className="rounded-full"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" />
        </div>
        </Link>
        </div>
      </div>
      </div>
      {/* content section end */}
            {/* mobile content section start */}
            <div className={`${toggle ? 'top-14  bottom-0 right-0 left-0' : 'top-12 -left-96 right-[1000px] bottom-0' } fixed transform duration-500 easy-in bg-black z-50 bg-opacity-95 md:hidden`}>
              <ul className="flex flex-col justify-center items-center h-full w-full gap-3">
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                {validUser?.userType === "admin" &&<li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/user-order-table"
                  >
                    UserOrder
                  </NavLink>
                </li>}
                {validUser?.userType === "admin" &&<li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/all-users"
                  >
                    AllUsers
                  </NavLink>
                </li>}
                {validUser?.userType === "user" &&<li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/order-table"
                  >
                    Order
                  </NavLink>
                </li>}
                {validUser?.userType === "admin" && <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/create-users"
                  >
                    CreateUsers
                  </NavLink>
                </li>}
                {validUser?.userType === "admin" && <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/create-product"
                  >
                    CreateProduct
                  </NavLink>
                </li>}
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold text-green-500"
                        : "text-sm text-white"
                    }
                    to="/user-profile"
                  >
                    UserProfile
                  </NavLink>
                </li>
                <li onClick={logOutFun}>
                  <button className="text-sm font-bold text-green-500">LogOut</button>
                </li>
              </ul>
            </div>
          {/* link section end */}
      {/* mobile content section end */}
    </>
  );
};

export default Header;