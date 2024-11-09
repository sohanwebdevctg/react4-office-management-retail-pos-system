import { Outlet } from "react-router-dom";
import Navbar from './../Components/Navbar/Navbar';


const MainLayout = () => {
  return (
    <>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* content section start */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* content section end */}
    </>
  );
};

export default MainLayout;