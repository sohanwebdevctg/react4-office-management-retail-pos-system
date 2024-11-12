import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import Cart from "./Cart";
import OrderData from "./OrderData";
import Swal from "sweetalert2";


const Home = () => {

  // loading data
  const [datas, setDatas] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then((res) => res.json())
    .then((data) => setDatas(data))
  },[])


  const [quantity, setQuantity] = useState(1)

  const quantityData = (data) => {
    setQuantity(data)
  }


  // set total data
  const [totalItem, setTotalItem] = useState([])

  // add data
  let addData = (item) => {
    const data = {
      id: item.id,
      image: item.image,
      name: item.name,
      quantity: parseInt(quantity),
      total: parseInt(quantity) * item.price || item.price
    }
    // checking data
    let check = totalItem.find((previous) => previous.id === item.id)
    if(check){

      Swal.fire({
        position: "middle",
        icon: "error",
        title: "your data already exists!",
        showConfirmButton: false,
        timer: 1000
      });

    }else{
      let previousData = [...totalItem, data];
      setTotalItem(previousData);
    }
    
  }



  return (
    <div>
      {/* title start */}
      <Title name={'home'}></Title>
      {/* title end */}
      <div className="flex justify-between h-screen sm:gap-2 md:gap-1 lg:gap-2 xl:gap-3">
        {/* cart-item start */}
        <div className="w-full sm:w-[70%] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-2 2xl:gap-3 px-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white">
          {
            datas.map((item, index) => <Cart key={index}
            item={item}
            addData={addData}
            quantityData={quantityData}
            ></Cart>)
          }
        </div>
        {/* cart-item end */}
        {/* quantity start */}
        <div className="sm:w-[30%] hidden sm:block px-5">
          <OrderData totalItem={totalItem}></OrderData>
        </div>
        {/* quantity end */}
      </div>
    </div>
  );
};

export default Home;