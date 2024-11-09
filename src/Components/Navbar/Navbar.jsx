import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoLogOut } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getData, getUser, removeUser } from "../../utilities/localstorage";
import Swal from "sweetalert2";

import logoImg from '../../../public/logo/logo.png'


const Navbar = () => {
  // toggle button
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        setActive(true);
      }else{
        setActive(false);
      }
    })
  })

  // user data
  const [user, setUser] = useState(() => getUser());
  const [data, setData] = useState(() => getData());

  //navigate
  const navigate = useNavigate();
  
  //remove function
  const removeFun = () => {
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "You are now Logged out",
      showConfirmButton: false,
      timer: 1500
    });
    removeUser();
    navigate('/');

    // only page reload
    location.reload();
  }

  return (
    <>
      {/* content section start */}
        {/* desktop section start */}
        <div className={`${active ? 'fixed top-0 right-0 left-0 z-50 bg-white shadow-md shadow-slate-200': 'sticky bg-white'}`}>
        <div className=" container mx-auto">
          <div className="hidden md:flex justify-between items-center md:h-24 2xl:h-28 md:px-7 lg:px-9 xl:px-10 2xl:px-12">
            {/* left side start */}
            <div>
              <img
                src={logoImg}
                className="md:w-20 md:h-10 lg:w-24 lg:h-11 xl:w-28 xl:h-11 2xl:w-32 2xl:h-12"
              ></img>

            </div>
            {/* left side end */}
            {/* middle side start */}
            <div>
              <ul className="flex items-center md:gap-4 xl:gap-7 2xl:gap-10">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold"
                        : "md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold"
                        : "md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
                    }
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold"
                        : "md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold"
                        : "md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold"
                        : "md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* middle side end */}
            {/* right side start */}
            <div>
              <ul className="flex items-center md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                
                {
                  (user?.email && user?.user) && <li>
                  <Link to="/cart-table">
                  <div className="indicator">
                  <FaShoppingCart className="md:text-xs lg:text-sm xl:text-base 2xl:text-xl text-red-600"></FaShoppingCart>
                  <span className="badge badge-sm indicator-item">{data ? data?.length : 0}</span>
                </div>
                  </Link>
                </li>
                }
                {
                  (user?.email && user?.user) ? <li onClick={() => removeFun()}><Link className= "md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-red-600" to="/"><IoLogOut /></Link></li> : <li><Link className= "md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-red-600" to="/login"><IoMdPerson></IoMdPerson></Link></li>
                }
              </ul>
            </div>
            {/* right side end */}
          </div>
        </div>
        </div>
        {/* desktop section end */}
        {/* mobile section start */}
        <div className="block md:hidden">
          {/* logo and button section start */}
          <div className={`${active ? 'fixed top-0 right-0 left-0 z-50 bg-white shadow-md shadow-slate-200': 'sticky bg-white'} flex justify-between items-center px-6 h-20 sm:h-24 `}>
            <div>
              <img
                src={logoImg}
                className="w-20 h-8 sm:w-24 sm:h-10"
              ></img>
            </div>
            <div>
              {toggle ? (
                <IoClose
                  onClick={() => setToggle(!toggle)}
                  className="text-red-600 text-xl sm:text-2xl"
                ></IoClose>
              ) : (
                <GiHamburgerMenu
                  onClick={() => setToggle(!toggle)}
                  className="text-red-600 text-lg sm:text-2xl"
                ></GiHamburgerMenu>
              )}
            </div>
          </div>
          {/* logo and button section end */}
          {/* link section start */}
          <div className={`${toggle ? 'top-20 sm:top-24 bottom-0 right-0 left-0' : 'top-20 sm:top-24 -left-96 right-[1000px] bottom-0' } fixed transform duration-500 easy-in bg-slate-200 z-50 bg-opacity-95`}>
              <ul className="flex flex-col justify-center items-center h-full w-full gap-7 sm:gap-8">
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm sm:text-base font-bold"
                        : "text-sm sm:text-base"
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
                        ? "text-sm sm:text-base font-bold"
                        : "text-sm sm:text-base"
                    }
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm sm:text-base font-bold"
                        : "text-sm sm:text-base"
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm sm:text-base font-bold"
                        : "text-sm sm:text-base"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm sm:text-base font-bold"
                        : "text-sm sm:text-base"
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                <ul className="flex items-center gap-5">
                {
                  (user?.email && user?.user) && <li onClick={() => {setToggle(!toggle)}}>
                <Link to="/cart-table">
                <div className="indicator">
                <FaShoppingCart className="text-lg sm:text-xl text-red-600"></FaShoppingCart>
                <span className="badge badge-sm indicator-item">{data ? data?.length : 0}</span>
              </div>
                </Link>
              </li>
                }
                {
                  (user?.email && user?.user) ? <li onClick={() => {setToggle(!toggle), removeFun()}}><Link className= "text-lg sm:text-xl text-red-600" to="/"><IoLogOut /></Link></li> : <li onClick={() => setToggle(!toggle)}><Link className= "text-lg sm:text-xl text-red-600" to="/login"><IoMdPerson></IoMdPerson></Link></li>
                }
              </ul>
                </li>
              </ul>
            </div>
          {/* link section end */}
        </div>
        {/* mobile section end */}
      {/* content section end */}
    </>
  );
};

export default Navbar;
