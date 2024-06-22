import React from 'react'

const Headline = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 pb-20'>
      <div className='flex justify-center '>
        <div className='bg-[#67C2EE] absolute h-[80vh] rounded-br-[40%] w-[30%] ml-[-500px] z-[-1] lg:h-[95vh] lg:rounded-br-[20%]'></div>
        <img src='/images/logo.png' className='absolute h-[250px]'/>
        <img src='/images/evBattery.png' width="65%" className='max-h-[300px] mt-[10%] lg:mt-[40%]'/>
      </div>
      <div className='pt-[5%] max-w-[70%]'>
        <h1 className='text-7xl font-bold pb-20'>
        Battery Passport
        </h1>
        <div className='pl-5'>
        <h5 className='text-3xl font-bold'>
        Ultium Battery Passport
        </h5>
        <p className='text-2xl font-semibold leading-10'>Explore the essential technical and environmental attributes of the Ultium Battery. Contributing to the broader goals of a greener future.</p>
        <h4 className='text-3xl font-bold'>"Pushing the Limits of Transportation & Technology."</h4>
        <br/>
        <br/>
        <p>
        Interested in creating and publishing your own verifiable Battery Passport?
        Contact us or RCS Global for a personal demo of our Battery Passport management system.
        </p>
        <br/>
        <div className='flex'>
          <button className='border-solid rounded-lg border-4 mr-2 pl-4 pr-4 pt-1 pb-1 bg-[#3B97C6] text-white hover:bg-white hover:text-black hover:border-[#3B97C6] duration-300'>Get in touch</button>
          <button className='border-solid rounded-lg border-4 pl-4 pr-4 pt-1 pb-1 bg-[#3B97C6] text-white hover:bg-white hover:text-black hover:border-[#3B97C6] duration-300'>Learn more</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Headline
