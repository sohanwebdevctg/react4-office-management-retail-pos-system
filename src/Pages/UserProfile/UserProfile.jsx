import { useState } from "react";
import Title from "../../Components/Title/Title";
import { getUser } from "../../utilities/localstorage";


const UserProfile = () => {

  const [validUser, setValidUser] = useState(() => getUser());

  return (
    <>
    {/* title start */}
    <Title name={'User-Profile'}></Title>
      {/* title end */}
                  {/* content start */}
                  <div className="my-8 xl:my-10 ">
                    {/* table title start */}
          <div className="w-[58%] sm:w-[38%] md:w-[29%] lg:w-[24%] xl:w-[23%] 2xl:w-[24%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">User-Profile</h3>
          </div>
          {/* table title end */}
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 flex items-center justify-center">
          
          {/* user start */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:w-2/3 md:w-2/3 lg:w-1/2 xl:1/2 shadow-md shadow-slate-200 p-5 gap-2 sm:gap-5 mt-10 w-2/3">
            {/* img start */}
            <div className="avatar online">
  <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 rounded-full">
    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" />
  </div>
</div>
            {/* img end */}
            {/* details start */}
            <div>
              <ul className="space-y-2">
                <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Name :</strong><i> {validUser?.name}</i></li>
                <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Email :</strong><i> {validUser?.email}</i></li>
                <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Role :</strong><i> {validUser?.userType}</i></li>
              </ul>
            </div>
            {/* details end */}
          </div>
          {/* user end */}
        </div>
        {/* content section end */}
      </div>
      {/* content end */}
    </>
  );
};

export default UserProfile;