import React from 'react'
import Img from 'gatsby-image'
const Hero = ({ data }) => {
  return (
    <div className={`h-[100vh] lg:h-[37vw] relative w-full`}>
      <Img className={'w-full h-full object-contain object-left-top'} fluid={data.image.childImageSharp.fluid} />
      <div className="custom_container w-3/4  text-white  absolute top-1/2 transform -translate-y-1/2  left-1/2  -translate-x-1/2">
        <h1 className='text-2xl font-bold xl:text-5xl'>{data.title}</h1>
        <p  className='text-lg font-thin xl:text-2xl'>{data.description}</p>
      </div>
    </div>
  )
}

export default Hero