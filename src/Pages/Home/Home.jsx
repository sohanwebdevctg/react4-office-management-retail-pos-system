import { useEffect, useRef, useState } from "react";
import Title from "../../Components/Title/Title";
import Cart from "./Cart";
import OrderData from "./OrderData";
import Swal from "sweetalert2";
import { getUser } from "../../utilities/localstorage";


const Home = () => {

  // get user data
  const [validUser, setValidUser] = useState(() => getUser());

  // loading data
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then((res) => res.json())
    .then((data) => {
      setAllProducts(data)
    })
  },[])

  // get quantity data
  const count = useRef(1)
  const [quantity, setQuantity] = useState(count.current)
  const quantityData = (data) => {
    setQuantity(data)
  }


  // set total data
  const [totalItem, setTotalItem] = useState([])

  // add data
  let addData = (item) => {
    const data = {
      id: item.id,
      name : validUser.name,
      email : validUser.email,
      image: item.image,
      productName: item.productName,
      quantity: parseInt(quantity),
      product: "pending",
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

  // delete single data
  const deleteFun = (id) => {
    const findId = totalItem.filter((item) => item.id !== id);
    setTotalItem(findId);
  }

  return (
    <div>
      {/* title start */}
      <Title name={'home'}></Title>
      {/* title end */}
      <div className="flex justify-between h-full sm:gap-2 md:gap-1 lg:gap-2 xl:gap-3">
        {/* cart-item start */}
        <div className="w-full h-full sm:h-[430px] md:h-[430px] lg:h-[600px] xl:h-[520px] md:w-[60%] lg:w-[65%] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-2 2xl:gap-3 px-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white">
          {
            allProducts.map((item, index) => <Cart key={index}
            item={item}
            addData={addData}
            quantityData={quantityData}
            ></Cart>)
          }
        </div>
        {/* cart-item end */}
        {/* quantity start */}
        <div className="md:w-[40%] md:h-[430px] lg:h-[600px] xl:h-[520px] lg:w-[35%] hidden md:block px-5">
          <OrderData deleteFun={deleteFun}
          totalItem={totalItem}
          setTotalItem={setTotalItem}
          ></OrderData>
        </div>
        {/* quantity end */}
      </div>
    </div>
  );
};

export default Home;