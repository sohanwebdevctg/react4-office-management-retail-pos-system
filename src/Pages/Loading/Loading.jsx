

const Loading = () => {
  return (
    <div  className='flex justify-center items-center h-screen'>
      {/* content section start */}
      <div className='text-center flex items-center'>
        <p className='text-black text-6xl md:text-9xl'>L</p>
        <div className='border-dashed p-5 md:p-10 rounded-full border-red-600 border-8 animate-spin'></div>
        <p className='text-black text-6xl md:text-9xl'>ADING</p>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Loading;