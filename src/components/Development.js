import React from 'react'
import Img from 'gatsby-image'
const Development = ({ data, unicef }) => {
  return (
    <div className='wrappper '>
      <div className={`relative w-full h-full top-0 left-0 py-20 z-50 bg-cover bg-center`}>
        <div className='absolute top-0 left-0 w-full h-full  '>
          <Img fluid={data.image.childImageSharp.fluid} alt="team" className={'w-full h-full object-contain'} />
        </div>
        <div className='bg-[#3569b2c9] z-0 absolute top-0 left-0 w-full h-full' />
        <div className="custom_container text-start  relative z-10">
          <h1 className='text-white text-xl xl:text-3xl leading-11 font-bold '>{data.title}</h1>
          <p className='text-white text-sm font-thin leading-9 md:text-lg mt-4'>{data.description}</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 relative z-20'>
            {data?.ways?.map((item, index) => <div key={index} className='w-full px-5 bg-white h-full flex flex-col relative'>
              <div className='flex-1'>
                <Img fluid={item.image.childImageSharp.fluid} alt="team" className='w-full  ' />
              </div>
              <div className=' w-full  top-0 left-0 flex flex-col items-center justify-center text-center h-32'>
                <h1 className='text-black text-xl xl:text-2xl leading-9 font-bold '>{item.title}</h1>
                <p className='text-black flex-1 text-sm font-thin leading-6 md:text-lg mt-4'>{item.desc}</p>
              </div>
            </ div>)}
          </div>
        </div>
      </div>
      <div className='flex  flex-col lg:flex-row relative'>
        <div className="bg-white w-full lg:w-1/2">
          <div className="custom_container lg:hidden my-20 text-start">
            <h1 className='text-black text-xl xl:text-3xl leading-11 font-bold '>{unicef.title}</h1>
            <p className='text-black text-sm font-thin leading-9 md:text-lg mt-4'>{unicef.desc}</p>
          </div>
        </div>
        <div className=" w-full h-full lg:w-1/2 flex-1">
          <Img fluid={unicef.image.childImageSharp.fluid} className={'w-full'} />
        </div>
        <div className='absolute w-full  place-content-center left-0 top-0 h-full'>
          <div className="custom_container  flex items-center justify-between">
            <div className='w-full hidden lg:block md:w-1/2 bg-white text-start pr-20'>
              <h1 className='text-black text-xl xl:text-3xl leading-11 font-bold '>{unicef.title}</h1>
              <p className='text-black text-sm font-thin leading-9 md:text-lg mt-4'>{unicef.desc}</p>
            </div>
            <div className='w-full lg:w-1/2'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Development