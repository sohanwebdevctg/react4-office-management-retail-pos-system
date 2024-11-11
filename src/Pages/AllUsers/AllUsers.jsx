import { useState } from "react";
import Title from "../../Components/Title/Title";
import { getUser, setUser } from "../../utilities/localstorage";


const AllUsers = () => {

  // user data
  const [users, setUsers] = useState(() => getUser());
  

  const deleteUser = (item) => {

    let validUser = users.filter((data) => data.email !== item.email && data.userType !== item.userType);
    localStorage.setItem('userInfo', JSON.stringify(validUser));
    setUser(validUser);
    location.reload();
  }

  return (
    <>
      {/* title start */}
      <Title name={'All-Users'}></Title>
      {/* title end */}
      {/* content start */}
      <div className="my-8 xl:my-10 ">
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 ">
          {/* table title start */}
          <div className="w-[40%] sm:w-[25%] md:w-[18%] lg:w-[16%] xl:w-[15%] 2xl:w-[14%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">All Users</h3>
          </div>
          {/* table title end */}
          {/* table start */}
          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead className="bg-red-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {
                users?.length > 0 ? (<tbody>
                  {
                    users.map((item, index) => <tr key={index} className="hover:bg-slate-100">
                    <td>{++index}</td>
                    <td><p>{item?.name}</p></td>
                    <td>{item?.email}</td>
                    <td>{item?.userType}</td>
                    <td><button onClick={() => deleteUser(item)} className="bg-red-500 p-1 rounded-md text-white text-xs">Delete</button></td>
                  </tr>)
                  }
                </tbody>) : (<p className="text-center mx-auto w-full">No data available</p>)
              }
              
            </table>
          </div>
          {/* table end */}
        </div>
        {/* content section end */}
      </div>
      {/* content end */}
    </>
  );
};

export default AllUsers;