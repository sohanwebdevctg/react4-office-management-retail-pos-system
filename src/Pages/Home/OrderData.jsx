import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const OrderData = ({totalItem, deleteFun}) => {

  

  const {validUser} = useContext(AuthContext);

  const setDataFun = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const setData = {
      name: name,
      email: email,
      cart: totalItem
    }

    if(validUser.name === name && validUser.email === email){
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "data has been saved",
        showConfirmButton: false,
        timer: 1000
      });
      console.log(setData)
      // location.reload();
    }else{
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "user not found",
        showConfirmButton: false,
        timer: 1000
      });
    }
    form.reset();
  }

  return (
    <div className="flex flex-col justify-between h-full">
      {/* content section start */}
      {/* table start */}
      <div className="h-1/2 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white">
        <table className="table w-full">
              {/* head */}
              <thead className="bg-green-500 text-white w-full">
                <tr>
                  <td className="text-xs">#</td>
                  <td className="text-xs">Image</td>
                  <td className="text-xs">Name</td>
                  <td className="text-xs">Quantity</td>
                  <td className="text-xs">Total</td>
                  <td className="text-xs">Delete</td>
                </tr>
              </thead>
              {
                totalItem?.length > 0 ? (<tbody className="w-full">
                  {
                    totalItem.map((item, index) => <tr key={index} className="hover:bg-slate-100 w-full">
                    <td className="text-xs">{++index}</td>
                    <td><img src={item.image} className="w-5 h-5"></img></td>
                    <td><p className="text-[10px]">{item?.name.slice(0,5)}</p></td>
                    <td><p className="text-[10px]">{item?.quantity}</p></td>
                    <td><p className="text-[10px]">{item?.total}</p></td>
                    <td><button onClick={() => deleteFun(item.id)} className="text-[10px] btn btn-xs bg-red-600 hover:bg-red-600 text-white">Delete</button></td>
                  </tr>)
                  }
                </tbody>) : (<p className="w-full">No data</p>)
              }
        </table>
      </div>
      {/* table end */}
      {/* form start */}
      <div className="p-5 rounded-2xl bg-base-100 w-full shrink-0 shadow-2xl mb-3">
      <form onSubmit={setDataFun}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 text-white hover:bg-green-500">Submit</button>
        </div>
      </form>
    </div>
      {/* form end */}
      {/* content section end */}
    </div>
  );
};

export default OrderData;