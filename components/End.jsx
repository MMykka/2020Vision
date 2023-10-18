import React from 'react'

const end = () => {
  return (
    <section className=' py-16 relative w-full '>
      <div className="flex lg:flex-row flex-col justify-center items-center max-w-6xl mx-auto ">
    <div className="flex-col w-full text-center lg:text-left p-5">
    <h1 className='text-[45px]'>Best selection of <br/><span className={`font-medium border-b-4 border-[#dfdfdf]`}>High Quality</span> lenses.</h1>
  <p className=' text-gray-500 mt-5  mx-auto lg:mx-0' >Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet </p>

<div className='flex mt-10 gap-5 justify-center lg:justify-start'>
<button type='button' className='px-5 py-3 bg-black rounded-xl  text-[15px] text-white font-bold  '>CONTACT US</button>
<button type='button' className='px-7 py-3 border-2 rounded-xl font-medium'>CLICK ME</button>
</div>
</div>

<div
className="w-full flex gap-5 justify-center"
>
<img className=" w-[40%] xl:w-[50%] " src="nigga1.png" alt="photo"/>
<img className=" w-[40%] xl:w-[50%] translate-y-7" src="nigga2.png" alt="photo"/>
</div>
</div>
    </section>
    
  )
}

export default end