import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";


const CreateUsers = () => {

  // submit form data
  const createProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const status = form.status.value;
    const userType = form.userType.value;
    const password = form.password.value;

    const userInfo = {name,email, status, userType, password}

    fetch('https://backend-eosin-one.vercel.app/users',{
      method : 'POST',
      headers: { 'content-type' : 'application/json'},
      body : JSON.stringify(userInfo)
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.insertedId){
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Your data has been saved",
        showConfirmButton: false,
        timer: 1000
      });
      form.reset();
      }
    })
  }

  return (
    <>
    {/* title start */}
    <Title name={'Create-Product'}></Title>
      {/* title end */}
      {/* content start */}
      <div className="container mx-auto sm:flex sm:flex-col items-center h-full md:h-screen px-5 mt-5 md:mt-3 lg:mt-5 xl:mt-6 2xl:mt-8 gap-5">
        {/* form title start */}
        <div className="w-[58%] sm:w-[32%] md:w-[23%] lg:w-[21%] xl:w-[20%] 2xl:w-[20%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">Create-Users</h3>
          </div>
          {/* form title end */}
        {/* form start */}
        <div className="card bg-base-100 w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 shrink-0 shadow-2xl">
      <form onSubmit={createProduct} className="p-5">
        <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="enter product name" className="input input-bordered input-sm md:input-md" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="enter your email" className="input input-bordered input-sm md:input-md" required />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 sm:gap-3">
          <div className="form-control w-full">
            <label className="label" >
              <span className="label-text">Status</span>
            </label>
            <select name="status" className="select select-bordered select-sm md:select-md w-full">
  <option selected value={true}>true</option>
  <option value={false}>false</option>
</select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">UserType</span>
            </label>
            <select name="userType" className="select select-bordered select-sm md:select-md w-full">
  <option selected value="user">User</option>
  <option value="admin">Admin</option>
</select>
          </div>
        </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="enter product password" className="input input-bordered input-sm md:input-md" required />
          </div>
        <div className="form-control mt-3">
          <button className="py-2 w-full bg-green-500 hover:bg-hover-500 text-white font-bold rounded-md">Create</button>
        </div>
      </form>
    </div>
        {/* form end */}
      </div>
      {/* content end */}
      
    </>
  );
};

export default CreateUsers;