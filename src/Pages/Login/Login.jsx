import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../utilities/localstorage';
import Swal from 'sweetalert2';
import Title from '../../Components/Title/Title';

const Login = () => {

  //navigate the user
  const navigate = useNavigate();

  const loginFun = (event) => {

    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const user = true;

    if(email === null && password === null){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }else{
      const userValue = {email: email, password : password, user : user};
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "You are now Logged in",
        showConfirmButton: false,
        timer: 1500
      });
      setUser(userValue)
      form.reset();
      navigate('/');
    }
  }


  return (
    <>
    {/* title start */}
    <Title name={'login'}></Title>
      {/* title end */}
      <div className="my-8 xl:my-10 bg-white h-full sm:h-screen flex items-center px-5">
        {/* content section start */}
        <div className="container mx-auto">
          {/* login form start */}
          <div className="card bg-base-100 w-full shadow-2xl mt-10 sm:w-11/12  md:w-10/12 lg:w-10/12 xl:w-8/12 2xl:w-9/12 mx-auto">
            <form onSubmit={loginFun} className=" w-full flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-5">
              {/* left start */}
              <div className="flex-1 bg-red-500 rounded-ss-2xl rounded-se-2xl sm:rounded-se-none sm:rounded-es-2xl h-full w-full">
                <div className='h-80 sm:h-96 md:h-96 lg:h-[420px] xl:h-[440px] 2xl:h-[460px] w-full  flex justify-center items-center'>
                  <ul>
                    <li className='text-center'>
                      <span className='text-lg sm:text-sm md:text-sm lg:text-lg text-slate-200'>Freys</span><br></br>
                      <span className='text-xl sm:text-lg md:text-lg lg:text-2xl uppercase text-white font-bold'>label <span className='text-slate-200'>360</span></span>
                    </li>
                    <li className='mt-5 text-center'><h3 className='text-xl sm:text-lg md:text-lg lg:text-2xl text-white font-bold'>Hello, User</h3></li>
                    <li><p className='text-sm sm:text-xs md:text-xs lg:text-base text-gray-300 text-center'>Enter your sign in credentials and<br></br>enjoy your work using the tool</p></li>
                  </ul>
                </div>
              </div>
              {/* left end */}
              {/* right start */}
              <div className="flex-1 p-5">
                <div className="form-control text-center">
                  <h3 className='text-2xl text-red-500 font-bold'>Sign in Account</h3>
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
                    name='password'
                    required
                  />
                </div>
                <div className="form-control mt-6 w-full">
                <button className="btn bg-red-500 hover:bg-red-500 text-white w-full">Sign In</button>
                </div>
                <div className="form-control mt-3 w-full text-center">
                  <p className='text-sm'>Please! go to <Link className='text-red-500 font-bold' to="/">Home</Link></p>
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