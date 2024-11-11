import { useNavigate } from "react-router-dom";
import { setUser } from "../../utilities/localstorage";
import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";

import img from "../../../public/login/logImg.png";

const Login = () => {
  //navigate the user
  const navigate = useNavigate();

  const loginFun = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    let user = true;
    let userType = "user";

    if(name === "admin" && email === "admin@gmail.com"){
      userType = "admin";
    }

    if (name === null && email === null && password === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      const userValue = {name: name, email: email, user: user, userType: userType };
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "You are now Logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      setUser(userValue);
      form.reset();
      navigate("/");
    }
  };

  return (
    <>
      {/* title start */}
      <Title name={"login"}></Title>
      {/* title end */}
      <div className="my-8 xl:my-10 bg-white h-full sm:h-screen flex items-center px-5">
        {/* content section start */}
        <div className="container mx-auto">
          {/* login form start */}
          <div className="p-3 bg-base-100 w-full shadow-2xl mt-10 sm:w-11/12  md:w-10/12 lg:w-10/12 xl:w-8/12 2xl:w-9/12 mx-auto">
            <form
              onSubmit={loginFun}
              className=" w-full flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-3 sm:gap-5"
            >
              {/* left start */}
              <div className="flex-1 p-5">
                <div className="form-control text-center">
                  <h3 className="text-2xl text-red-500 font-bold">
                    Log In Account
                  </h3>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter you name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="enter you email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="enter you password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6 w-full">
                  <button className="btn bg-red-500 hover:bg-red-500 text-white w-full">
                    Log In
                  </button>
                </div>
              </div>
              {/* left end */}
              {/* right start */}
              <div className="flex-1 bg-red-500 h-full w-full overflow-hidden">
                <div className="h-80 sm:h-96 md:h-96 lg:h-[420px] xl:h-[440px] 2xl:h-[460px] w-full  flex justify-center items-center">
                  <img src={img} className="h-full w-full"></img>
                </div>
              </div>
              {/* right end */}
            </form>
          </div>
          {/* login form end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default Login;
