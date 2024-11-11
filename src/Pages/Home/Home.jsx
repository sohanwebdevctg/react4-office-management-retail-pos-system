import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import Cart from "./Cart";


const Home = () => {

  // loading data
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('products.json')
    .then((res) => res.json())
    .then((data) => setDatas(data))
  },[])

  return (
    <div>
      {/* title start */}
      <Title name={'home'}></Title>
      {/* title end */}
      <div className="flex justify-between h-screen sm:gap-2 md:gap-1 lg:gap-2 xl:gap-3">
        {/* cart-item start */}
        <div className="w-full sm:w-[70%] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-2 2xl:gap-3 px-2">
          {
            datas.map((item, index) => <Cart key={index} item={item}></Cart>)
          }
        </div>
        {/* cart-item end */}
        {/* quantity start */}
        <div className="sm:w-[30%] bg-blue-300 hidden sm:block">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ex?</p>
        </div>
        {/* quantity end */}
      </div>
    </div>
  );
};

export default Home;