import React from 'react'
import { LO,background,Woman } from './images'
import Image from 'next/image'

const About = () => {
  return (

   <section className=' relative '>
     <div className="flex lg:flex-row flex-col gap-20 lg:gap-10 justify-center items-center max-w-6xl mx-auto">
     <div
          className="p-5 w-[400px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[900px] lg:h-[400px] xl:w-[1400px] xl:h-[400px] lg:translate-x-10"
          >
            <img className=" w-[100%] " src="https://images.pexels.com/photos/1018134/pexels-photo-1018134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mika"/>
          </div>
          <div className="flex-col lg:-translate-x-[4rem] w-full text-center lg:text-left p-5">
          <h1 className='text-[45px]'>Best glasses <br/><span className={`font-medium border-b-4 border-sky-300`}>Collection</span> of 2023.</h1>
      <p className=' text-gray-500 mt-5  mx-auto lg:mx-0' >Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet </p>
      
            <div className='flex mt-10 gap-5 justify-center lg:justify-start'>
            <button type='button' className='px-5 py-3 bg-sky-300  text-[15px] text-white font-bold  '>CONTACT US</button>
            <button type='button' className='px-7 py-3 border-2 font-medium'>CLICK ME</button>
            </div>
          </div>
          
        </div>

        {/* about banner */}

        <div className='w-full sm:h-screen h-full bg-slate-100 relative -translate-y-5 -z-10 mt-10 sm:mt-0'>
            <div className="max-w-7xl h-full mx-auto flex flex-col items-center justify-center">
            <div className='relative bg-hero sm:h-[50vh] w-full mx-auto hidden sm:flex sm:flex-row flex-col sm:justify-between justify-center items-center'>
              <div className='px-20 flex flex-col '>
                <h1 className='w-full font-[400] text-[40px] sm:text-[50px] sm:leading-[60px] mt-10 leading-[50px] text-center sm:text-left'>Gordon glasses <br className='hidden sm:block'/> True Modern Classics</h1>
                <p className='mt-10 text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga laborum magni possimus. Ad cumque molestias, sit nulla quisquam tenetur atque officiis quasi nam tempora dolorem perspiciatis aliquam harum at.</p>
                <div className='flex mt-10 gap-5 justify-center sm:justify-start '>
                 <button type='button' className='px-7 py-3 bg-sky-300  text-[15px] text-white font-bold  '>BUY NOW</button>
                 <button type='button' className='px-7 py-3 border-2 font-medium'>READ MORE</button>
                </div>
              </div>

              <div className='sm:hidden w-[300px] h-[150px] mt-10 mx-auto'>
              <img className=' w-full h-full object-cover scale-150 opacity-80' src={'FerrariGlasses.png'} alt='header img'/>
            </div>  

              <div className=' hidden sm:block sm:w-[600px] h-full sm:mr-10 mx-auto'>
              <img src="woman.png" alt="" className='w-full h-full' />
              </div> 
              
            </div>
            <div className='hidden sm:block w-[500px] h-[150px] -translate-y-[5rem] '>
              <img className=' w-full h-full object-cover scale-150 opacity-80' src={'FerrariGlasses.png'} alt='header img'/>
            </div>  
            

            <div className='flex gap-5  text-sky-300 flex-wrap justify-center sm:justify-start'>
                <div className='flex justify-center items-center gap-4 p-5 py-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
              </svg>
              <div className='flex flex-col gap-1 '>
                <h1 className="text-black font-[500] text-[17px]">Best Materials</h1>
                <p className="text-gray-500" >Lorem, ipsum Lorem, ipsum.</p>
              </div>
                </div>

                <div className='flex justify-center items-center gap-4 p-5 py-10 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              <div className='flex flex-col gap-1'>
                <h1 className="text-black font-[500] text-[17px]">Carl Zeiss lenses</h1>
                <p className="text-gray-500" >Lorem, ipsum Lorem, ipsum.</p>
              </div>
                </div>

                <div className='flex justify-center items-center gap-4 p-5 py-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>

              <div className='flex flex-col gap-1'>
                <h1 className="text-black font-[500] text-[17px]">Modern design</h1>
                <p className="text-gray-500" >Lorem, ipsum Lorem, ipsum.</p>
              </div>
                </div>

                <div className='flex justify-center items-center gap-4 p-5 py-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>

              <div className='flex flex-col gap-1'>
                <h1 className="text-black font-[500] text-[17px]">All Sizes</h1>
                <p className="text-gray-500" >Lorem, ipsum Lorem, ipsum.</p>
              </div>
                </div>    
            </div>
            </div>
        </div>

        {/* end about banner */}


            <div className="flex lg:flex-row flex-col gap-0 lg:gap-10 justify-center items-center max-w-6xl mx-auto  ">
                <div className="flex-col lg:translate-x-10 w-full text-center lg:text-left p-5">
                <h1 className='text-[45px]'>Best selection of <br/><span className={`font-medium border-b-4 border-sky-300`}>High Quality</span> lenses.</h1>
              <p className=' text-gray-500 mt-5  mx-auto lg:mx-0' >Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet </p>
      
            <div className='flex mt-10 gap-5 justify-center lg:justify-start'>
            <button type='button' className='px-5 py-3 bg-sky-300  text-[15px] text-white font-bold  '>CONTACT US</button>
            <button type='button' className='px-7 py-3 border-2 font-medium'>CLICK ME</button>
            </div>
          </div>

          <div
          className="relative p-5 -z-10 w-[400px] h-[100%] sm:w-[500px] sm:h-[100%] lg:w-[900px] lg:h-[100%] xl:w-[1400px] xl:h-[100%] lg:-translate-x-10"
          >
            <img className=" w-[100%] " src="https://images.pexels.com/photos/1018134/pexels-photo-1018134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo"/>
          </div>
        </div>
    <div>
      
    </div>



   </section>
  
  )
}

export default About