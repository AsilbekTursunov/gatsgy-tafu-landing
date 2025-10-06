import React from 'react'
import Img from 'gatsby-image'

const Goals = ({ data }) => {
  return (
    <div className='bg-[#3569B2]'>
      <div className="custom_container py-10 space-y-5">
        <h2 className="text-white capitalize text-xl text-start xl:text-2xl font-semibold leading-11">
          {data.title}
        </h2>
        <div className="grid max-w-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.images.map((item, index) => <div>
            <Img key={index} fluid={item.img.childImageSharp.fluid} alt="team" className='w-full  ' />
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Goals