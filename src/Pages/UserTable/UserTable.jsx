import Title from "../../Components/Title/Title";


const UserTable = () => {

  const data = true;

  return (
    <>
      {/* title start */}
      <Title name={'User-Table'}></Title>
      {/* title end */}
      <div className="my-8 xl:my-10 ">
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 ">
          {/* table start */}
          <div className="overflow-x-auto">
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
    </>
  );
};

export default UserTable;