import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";


const CreateUsers = () => {

  // submit form data
  const createProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Your data has been saved",
      showConfirmButton: false,
      timer: 1000
    });
  }

  return (
    <>
    {/* title start */}
    <Title name={'Create-Product'}></Title>
      {/* title end */}
      {/* content start */}
      <div className="container mx-auto flex flex-col justify-center items-center h-full md:h-screen px-5 my-10 md:my-0 gap-5">
        {/* form title start */}
        <div className="w-[58%] sm:w-[32%] md:w-[23%] lg:w-[21%] xl:w-[20%] 2xl:w-[20%] mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border-b-2 border-b-red-500 text-red-500">Create-Users</h3>
          </div>
          {/* form title end */}
        {/* form start */}
        <div className="card bg-base-100 w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 shrink-0 shadow-2xl">
      <form onSubmit={createProduct} className="card-body">
        <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="enter product name" className="input input-bordered input-sm sm:input-md" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="enter product price" className="input input-bordered input-sm sm:input-md" required />
          </div>
        </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="file" name="image" className="file-input w-full file-input-bordered file-input-sm sm:file-input-md" required/>
        </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea required name="details" placeholder="enter details" className="textarea textarea-bordered textarea-sm w-full"></textarea>
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