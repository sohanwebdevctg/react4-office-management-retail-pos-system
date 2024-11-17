
import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import { getUser } from "../../utilities/localstorage";
import Swal from "sweetalert2";


const OrderTable = () => {

  // get user data
  const [validUser, setValidUser] = useState(() => getUser());

  // loading data
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userOrder/${validUser?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  }, [validUser]);

  console.log(data)

  // delete Item
  const deleteItem = (_id) => {
    fetch(`http://localhost:5000/allOrders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.deletedCount) {
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "data has been deleted",
            showConfirmButton: false,
            timer: 1000,
          });
          location.reload();
        }
      });
  };

  return (
    <>
      {/* title start */}
      <Title name={'Order-Table'}></Title>
      {/* title end */}
            {/* content start */}
            <div className="mt-2 sm:mt-2 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-4">
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 ">
          {/* table title start */}
          <div className="w-[58%] sm:w-[38%] md:w-[29%] lg:w-[24%] xl:w-[23%] 2xl:w-[24%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">Order-Table</h3>
          </div>
          {/* table title end */}
          {/* table start */}
          <div className="overflow-x-auto mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[350px] sm:h-[350px] md:h-[360px] lg:h-[380px] xl:h-[390px] 2xl:h-[400px]">
          <table className="table">
              {/* head */}
              <thead className="bg-red-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Request</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {data?.length > 0 ? (
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-100">
                      <td>{++index}</td>
                      <td>
                        <img className="h-6 w-6" src={item.image}></img>
                      </td>
                      <td>
                        <p>{item?.productName}</p>
                      </td>
                      <td>
                        {
                            item?.product === 'pending' ? <span className="bg-red-500 text-white p-1 rounded-md text-[9px]">pending</span> : <span className="bg-green-500 text-white p-1 rounded-md text-[9px]">approved</span>
                          }
                      </td>
                      <td>{item?.quantity}</td>
                      <td>{item?.total}</td>
                      <td>
                        <button
                          onClick={() => deleteItem(item?._id)}
                          className="text-[10px] btn btn-xs bg-red-600 hover:bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <p className="text-center mx-auto w-full">No data available</p>
              )}
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

export default OrderTable;