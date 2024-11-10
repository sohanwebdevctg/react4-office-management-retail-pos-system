import { Outlet } from "react-router-dom";
import Navbar from './../Components/Navbar/Navbar';
import { useState } from "react";


const MainLayout = () => {

  // toggle sidebar
  const [active, setActive] = useState(false);

  //toggle function
  const toggleSideBar = (data) => {
    setActive(data);
  }

  return (
    <>
      <div className="flex justify-between items-center h-full">
      {/* navbar section start */}
      <div className={`${active ? 'md:w-[8%]' : 'md:w-[10%]' } hidden md:block h-screen duration-500`}>
        <Navbar active={active} toggleSideBar={toggleSideBar}></Navbar>
      </div>
      {/* navbar section end */}
      {/* content section start */}
      <div className={`${active ? 'md:w-[98%]' : 'md:w-[90%]' } h-screen bg-blue-400 duration-500 w-full`}>
        <Outlet></Outlet>
      </div>
      {/* content section end */}
      </div>
      

    </>
  );
};

export default MainLayout;