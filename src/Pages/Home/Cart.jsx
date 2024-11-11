

const Cart = ({item}) => {

  console.log(item)

  return (
    <div className="bg-white shadow-lg p-2 flex flex-col justify-between">
      {/* img start */}
      <img src={item.image} className="w-16 h-12 mx-auto"></img>
      {/* img end */}
      {/* details start */}
      <ul className="mt-1 space-y-1">
        <li><h4 className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[10px] font-bold text-center">{item.name}</h4></li>
        <li><h4 className="text-[9px] sm:text-[9px] md:text-[9px] lg:text-[9px] xl:text-[10px] 2xl:text-[10px] text-gray-400 font-bold">{item.details}</h4></li>
        <li><button className="text-xs bg-green-500 py-1 w-full font-bold text-white rounded-md">Add</button></li>
      </ul>
      {/* details end */}
    </div>
  );
};

export default Cart;