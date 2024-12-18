import { Outlet } from "react-router-dom";
import Navbar from './../Components/Navbar/Navbar';
import { useState } from "react";
import Header from "../Components/Header/Header";


const MainLayout = () => {

  // toggle sidebar
  const [active, setActive] = useState(false);

  //toggle function
  const toggleSideBar = (data) => {
    setActive(data);
  }

  return (
    <>
      <div className="flex justify-between items-center h-screen">
      {/* navbar section start */}
      <div className={`${active ? 'sm:w-[11%] lg:w-[10%] xl:w-[9%] 2xl:w-[8%]' : 'sm:w-[6%] lg:w-[5%]' } hidden sm:block h-screen duration-500`}>
        <Navbar active={active} toggleSideBar={toggleSideBar}></Navbar>
      </div>
      {/* navbar section end */}
      {/* content section start */}
      <div className={`${active ? 'sm:w-[89%] lg:w-[90%] xl:w-[91%] 2xl:w-[92%]' : 'sm:w-[94%] lg:w-[95%]' } h-full bg-white duration-500 w-full`}>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      {/* content section end */}
      </div>
      

    </>
  );
};

export default MainLayout;