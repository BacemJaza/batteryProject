import React from 'react'

const Headline = () => {
  return (
    <div className='grid grid-cols-2 h-[100vh]'>
      <div className='flex justify-center'>
      <img src='/images/evBattery.png' width="75%" className='max-h-[400px] mt-[40%]'/>
      </div>
      <div className='pt-[10%] max-w-[70%]'>
        <h1 className='text-7xl font-bold pb-20'>
        Battery Passport
        </h1>
        <div className='pl-5'>
        <h5 className='text-3xl font-bold'>
        Ultium Battery Passport
        </h5>
        <p className='text-2xl font-semibold leading-10'>Explore the essential technical and <br/>environmental attributes of the Ultium Battery. Contributing to the broader goals of a greener future.</p>
        <h4 className='text-3xl font-bold'>"Pushing the Limits of<br/> Transportation & Technology."</h4>
        <br/>
        <p>Powered by</p>
        <br/>
        <div className='flex max-h-[50px]'>
        <img src='/images/rcs.png' width="40%"/>
        <img src='/images/spherity.png' width="30%"/>
        </div>
        <br/>
        <p>
        Interested in creating and publishing your own verifiable Battery Passport?
        Contact us or RCS Global for a personal demo of our Battery Passport management system.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Headline
