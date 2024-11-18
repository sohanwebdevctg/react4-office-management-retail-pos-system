import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";


const AllUsers = () => {

  // user data
  const [allUsers, setAllUsers] = useState([]);

  // allUsers
  useEffect(() => {
    fetch('https://backend-eosin-one.vercel.app/allUsers')
    .then((res) => res.json())
    .then((data) => setAllUsers(data))
  },[]);
  

  // delete single user
  const deleteSingleUser = (id) => {
    fetch(`https://backend-eosin-one.vercel.app/users/${id}`,{
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.deletedCount){
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Your user has been deleted successfully!",
          showConfirmButton: false,
          timer: 1000
        });
        const newUser = allUsers.filter((item) => item._id !== id);
        setAllUsers(newUser);
      }
    })
  }

  return (
    <>
      {/* title start */}
      <Title name={'All-Users'}></Title>
      {/* title end */}
      {/* content start */}
      <div className="mt-2 sm:mt-2 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-4">
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 ">
          {/* table title start */}
          <div className="w-[40%] sm:w-[25%] md:w-[18%] lg:w-[16%] xl:w-[15%] 2xl:w-[14%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">All Users</h3>
          </div>
          {/* table title end */}
          {/* table start */}
          <div className="overflow-x-auto mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[350px] sm:h-[350px] md:h-[360px] lg:h-[380px] xl:h-[390px] 2xl:h-[400px]">
            <table className="table">
              {/* head */}
              <thead className="bg-red-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Active</th>
                  <th>User</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {
                allUsers?.length > 0 ? (<tbody>
                  {
                    allUsers.map((item, index) => <tr key={index} className="hover:bg-slate-100">
                    <td>{++index}</td>
                    <td><p>{item?.name}</p></td>
                    <td>{item?.email}</td>
                    <td>{item?.status}</td>
                    <td>{item?.userType}</td>
                    <td>{
                      item?.name === "admin" && item?.email === "admin@gmail.com" && item?.userType === "admin" ? <button className="bg-red-500 p-1 rounded-md text-white text-xs disable opacity-50">Delete</button> : <button onClick={() => deleteSingleUser(item?._id)} className="bg-red-500 p-1 rounded-md text-white text-xs">Delete</button>
                      }</td>
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