import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoLogOut } from "react-icons/io5";
import { MdNotificationAdd,MdDashboard } from "react-icons/md";
import { FaUsers, FaEdit, FaWpforms, FaUserShield, FaUserCircle} from "react-icons/fa";
import { getUser, removeUser } from "../../utilities/localstorage";
import Swal from "sweetalert2";
import { useState } from "react";

// import logoImg from '../../../public/logo/logo.png'


const Navbar = ({active,toggleSideBar}) => {

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


  return (
    <>
      {/* content section start */}
      <div className="bg-black bg-opacity-90 h-full flex flex-col justify-around items-center">
        <div>
          {
            active ? <IoClose onClick={() => toggleSideBar(!active)} className=" text-green-500 text-xl xl:text-2xl 2xl:text-3xl"></IoClose> : <GiHamburgerMenu onClick={() => toggleSideBar(!active)} className=" text-green-500 text-xl xl:text-2xl"></GiHamburgerMenu>
          }
        </div>
        <ul className="flex flex-col gap-3">
          <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/">Home</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/"><MdDashboard className="text-xl xl:text-3xl mx-auto"></MdDashboard></NavLink>
            }
          </li>
          {
            validUser?.userType === "admin" && <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/user-order-table">UserOrder</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/user-order-table"><MdNotificationAdd className="text-xl xl:text-3xl mx-auto"></MdNotificationAdd></NavLink>
            }
          </li>
          }
          {
            validUser?.userType === "admin" && <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/all-users">AllUsers</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/all-users"><FaUsers className="text-xl xl:text-3xl mx-auto"></FaUsers></NavLink>
            }
          </li>
          }
          {
            validUser?.userType === "user" && <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/order-table">Order</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/order-table"><FaEdit className="text-xl xl:text-3xl mx-auto"></FaEdit></NavLink>
            }
          </li>
          }
          {
            validUser?.userType === "admin" &&  <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/create-users">CreateUsers</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/create-users"><FaUserShield className="text-xl xl:text-3xl mx-auto"></FaUserShield></NavLink>
            }
          </li>
          }
          {
            validUser?.userType === "admin" && <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/create-product">CreateProduct</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/create-product"><FaWpforms className="text-xl xl:text-3xl mx-auto"></FaWpforms></NavLink>
            }
          </li>
          }
          <li>
            {
              active ? <NavLink className={({ isActive }) => isActive ? "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500": "md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm text-white"} to="/user-profile">UserProfile</NavLink> : <NavLink className={({ isActive }) => isActive ? " text-green-500": " text-white"} to="/user-profile"><FaUserCircle className="text-xl xl:text-3xl mx-auto"></FaUserCircle></NavLink>
            }
          </li>
        </ul>
        <div onClick={logOutFun}>
          {
            active ? <button className="md:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm font-bold text-green-500">LogOut</button> : <IoLogOut className="text-2xl xl:text-3xl mx-auto text-green-500"></IoLogOut>
          }
          
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Navbar;
