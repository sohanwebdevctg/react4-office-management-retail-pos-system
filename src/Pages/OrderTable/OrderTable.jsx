import Title from "../../Components/Title/Title";


const OrderTable = () => {

  const data = true;


  return (
    <>
      {/* title start */}
      <Title name={'Order-Table'}></Title>
      {/* title end */}
            {/* content start */}
            <div className="my-8 xl:my-10 ">
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 ">
          {/* table title start */}
          <div className="w-[58%] sm:w-[38%] md:w-[29%] lg:w-[24%] xl:w-[23%] 2xl:w-[24%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">Order-Table</h3>
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
                data?.length > 0 ? (<tbody>
                  {
                    data.map((item, index) => <tr key={index} className="hover:bg-slate-100">
                    <td>{++index}</td>
                    <td><p>{item?.name}</p></td>
                    <td>{item?.email}</td>
                    <td>{item?.user}</td>
                    <td><button className="btn btn-red-400 text-white">Delete</button></td>
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

export default OrderTable;