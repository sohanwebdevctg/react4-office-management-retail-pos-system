import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

import { IoClose } from "react-icons/io5";


const Header = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <>
      {/* content section start */}
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
      {/* content section end */}
            {/* mobile content section start */}
            <div className={`${toggle ? 'top-14  bottom-0 right-0 left-0' : 'top-12 -left-96 right-[1000px] bottom-0' } fixed transform duration-500 easy-in bg-black z-50 bg-opacity-95`}>
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

              </ul>
            </div>
          {/* link section end */}
      {/* mobile content section end */}
    </>
  );
};

export default Header;