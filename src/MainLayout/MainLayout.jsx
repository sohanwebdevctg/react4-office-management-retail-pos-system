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
      <div className={`${active ? 'md:w-[11%] lg:w-[10%]' : 'md:w-[6%] lg:w-[5%]' } hidden md:block h-screen duration-500`}>
        <Navbar active={active} toggleSideBar={toggleSideBar}></Navbar>
      </div>
      {/* navbar section end */}
      {/* content section start */}
      <div className={`${active ? 'md:w-[89%] lg:w-[90%]' : 'md:w-[94%] lg:w-[95%]' } h-screen bg-white duration-500 w-full`}>
        <Outlet></Outlet>
      </div>
      {/* content section end */}
      </div>
      

    </>
  );
};

export default MainLayout;