import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      {/* content section start */}
      <div className="w-full h-14 bg-green-500 mb-1 flex justify-between items-center px-3 xl:px-5">
        <div>
          <h2 className="text-lg xl:text-xl text-white font-bold italic">Retail-pos</h2>
        </div>
        <div className="flex justify-center items-center gap-2">
        <GiHamburgerMenu className="text-lg xl:text-2xl"></GiHamburgerMenu>
        {/* {
            active ? <IoClose onClick={() => toggleSideBar(!active)} className=" text-green-500 text-xl xl:text-2xl 2xl:text-3xl"></IoClose> : <GiHamburgerMenu onClick={() => toggleSideBar(!active)} className=" text-green-500 text-xl xl:text-2xl"></GiHamburgerMenu>
          } */}
        <Link to="/user-profile">
        <div className="w-7 lg:w-9 rounded-full">
          <img className="rounded-full"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" />
        </div>
        </Link>
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Header;