import { useState } from "react";
import { getData, getUser, removeData, removeUser } from "../../utilities/localstorage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";

const CartTable = () => {

  // user data
  const [user, setUser] = useState(() => getUser());
  const [data, setData] = useState(() => getData());

  const navigate = useNavigate();

  //totalPrice
  const totalPrice = data?.reduce((accumulator ,item) => {
    return accumulator += item.total;
  }, 0)

  // buy data
  const buyData = (event) => {

    event.preventDefault();

    const form = event.target;
    
    const totalItem = form.totalItem.value;
    const totalPrice = form.totalPrice.value;
    const email = form.email.value;
    const accountNumber = form.accountNumber.value;

    // checked user
    if(email === user.email && accountNumber !== null && totalItem !== null && totalPrice !== null){

      removeUser();
      removeData();
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Your most welcome",
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/');
      location.reload();

    }else{
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "You are not valid user",
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  return (
    <>
    {/* title start */}
    <Title name={'cart-table'}></Title>
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
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
                </tr>
              </thead>
              {
                data?.length > 0 ? (<tbody>
                  {
                    data.map((item, index) => <tr key={index} className="hover:bg-slate-100">
                    <td>{++index}</td>
                    <td>
                      <img src={item?.image} className="w-10 h-10"></img>
                    </td>
                    <td><p>{item?.title}</p></td>
                    <td>{item?.price}</td>
                    <td>{item?.quantity}</td>
                    <td>{item?.total}</td>
                  </tr>)
                  }
                </tbody>) : (<p className="text-center mx-auto w-full">No data available</p>)
              }
              
            </table>
          </div>
          {/* table end */}
          {/* buy start */}
          <div className="card bg-base-100 w-full shadow-2xl mt-10 sm:w-11/12  md:w-10/12 lg:w-8/12 mx-auto">
            <form onSubmit={buyData} className="card-body w-full">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-5 ">
                {/* left start */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Item</span>
                  </label>
                  <input
                    type="text"
                    value={data ? data?.length : 0}
                    placeholder="your total item"
                    className="input input-bordered w-full"
                    name="totalItem"
                  />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Price</span>
                </label>
                <input
                  type="text"
                  value={totalPrice ? totalPrice : 0}
                  placeholder="your total price"
                  className="input input-bordered"
                  name="totalPrice"
                />
              </div>
              </div>
              {/* left end */}
              {/* right start */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="enter you email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Account Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter you account number"
                    className="input input-bordered"
                    required
                    name="accountNumber"
                  />
                </div>
              </div>
              {/* right end */}
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn bg-red-600 hover:bg-red-600 text-white w-full">Buy Now</button>
              </div>
            </form>
          </div>
          {/* buy end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default CartTable;
