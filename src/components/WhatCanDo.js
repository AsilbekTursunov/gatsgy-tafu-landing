import React from 'react'
const WhatCanDo = ({ data }) => {
  return (
    <div className='wrapper py-10'>
      <div className="custom_container space-y-5">
        <h1 className='text-black text-xl xl:text-3xl mb-10 leading-11 font-bold'>{data.title}</h1>
        <div className="flex items-center flex-wrap justify-evenly">
          {data.plans.map(plan => <div className='w-full md:w-1/2 lg:w-1/3 h-full '>
            <div className='flex flex-col items-center justify-center h-full w-full p-5 flex-1 space-y-3'>
              <span className='bg-blue-900/80 rounded-md p-3'>
                <img src={plan.icon.childImageSharp.fluid.src} alt='our-works' className='size-5' />
              </span>
              <h1 className='text-black text-base lg:text-xl  font-bold'>{plan.title}</h1>
              <p className='text-black text-sm font-thin leading-5 md:text-base '>{plan.desc}</p>
            </div>
          </div>)}
        </div>
        {/* <div className="flex items-center flex-wrap justify-center">
          {data.ideas.map(plan =>
            <div className='w-full md:w-1/3 h-full flex flex-col items-center justify-center  px-5  space-y-3'>
              <span className='bg-blue-900/80 rounded-md p-3'>
                <img src={plan.icon.childImageSharp.fluid.src} className='size-5' />
              </span>
              <h1 className='text-black text-base lg:text-xl  font-bold'>{plan.title}</h1>
              <p className='text-black text-sm font-thin leading-5 md:text-base '>{plan.desc}</p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default WhatCanDo