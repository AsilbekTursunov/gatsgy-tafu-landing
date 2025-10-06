import React from 'react'
import Img from 'gatsby-image'

const Practise = ({ data }) => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-1/2">
        {data.works.map((work, index) => <div key={index}>
          <Img fluid={work.img.childImageSharp.fluid} alt="team" className='w-full h-full ' />
        </div>)}
      </div>
      <div className="p-8 text-start w-full lg:w-1/2">
        <h2 className="text-black text-xl xl:text-3xl leading-9 font-bold">{data.title}</h2>
        <p className="text-black/50 text-sm font-thin leading-9  md:text-lg mt-4">{data.desc}</p>
      </div>
    </div>
  )
}

export default Practise