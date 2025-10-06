import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
const Footer = ({ data }) => {
  return (
    <div className='bg-[#ebf0f7] py-20'>
      <div className="custom_container">
        <div className="flex items-start flex-wrap text-start">
          <div className="w-full md:w-1/2 lg:w-1/3 md:pr-14 space-y-5">
            <h3 className="text-color text-base font-semibold">{data.info.title}</h3>
            <ul className='space-y-2 mt-2 flex flex-col'>
              {data.info.details.map((item, index) => <li key={index} >
                <Link className='w-full text-center text-color font-normal transform relative hover:-translate-2 transition-all cursor-pointer' to={`/`}>
                  {item}</Link>
              </li>)}
            </ul>
          </div>
          <div className="w-full mt-10 md:mt-0 md:w-1/2 lg:w-1/3 md:pr-14 flex-1 flex flex-col space-y-5">
            <h3 className="text-color text-base font-semibold">{data.hour.title}</h3>
            <ul className='space-y-2 mt-2 flex flex-col flex-1'>
              {data.hour.details.map((item, index) => <li key={index} className='w-full text-center text-color font-normal flex items-center justify-between cursor-pointer' >
                <p>{item.week}</p>
                <p>{item.time}</p>
              </li>)}
            </ul>
            <h3 className="text-color text-base font-semibold">{data.hour.phone}</h3>
            <div className="flex gap-5 items-center ">
              <div className="bg-blue-200/20 rounded-md items-center justify-center p-4">
                <Img fluid={data.hour.icon.childImageSharp.fluid} alt="team" className={'size-6 object-contain'} />
              </div>
              <p className='text-color text-base'>{data.hour.number}</p>
            </div>
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-1/3 lg:pr-14 space-y-5">
            <h3 className="text-color text-base font-semibold">{data.address.title}</h3>
            <div className="flex gap-5 items-center ">
              <div className="rounded-md items-center justify-center">
                <Img fluid={data.address.metro.icon.childImageSharp.fluid} alt="team" className={'w-10 object-contain'} />
              </div>
              <p className='text-color text-base'>{data.address.metro.title}</p>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="bg-blue-200/20 p-2 w-10 rounded-md items-center justify-center">
                <Img fluid={data.address.location.icon.childImageSharp.fluid} alt="team" className={'w-full object-contain'} />
              </div>
              <p className='text-color text-base'>{data.address.location.title}</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.1946284207584!2d69.20882795993597!3d41.256825901050746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b001c6fae5f%3A0xd1fcb60150f2f191!2sToshkent%20amaliy%20fanlar%20universiteti!5e1!3m2!1suz!2s!4v1759723616984!5m2!1suz!2s" width={"100%"} title='tafu' height={"250"} style={{ border: "0" }} allowfullscreen="" loading="lazy" />
          </div>
        </div>
        <div className='flex items-center gap-10 mt-14'>
          <div className='flex-1 w-full h-0.5 bg-blue-900/10' />
          <div>
            <Link to='/en' className='flex  gap-2 items-center'>
              <Img fluid={data.social.logo.childImageSharp.fluid} alt="logo" className=' w-14 md:w-22' />
              <div className='flex flex-col text-start'>
                {data?.social.name?.map((item, index) => <h1 key={index} className=' text-xs md:text-sm text-blue-900/90 font-bold'>{item}</h1>)}
              </div>
            </Link>
          </div>
          <div className='flex-1 w-full h-0.5 bg-blue-900/10' />
        </div>
        <div className="flex items-center justify-center gap-4 mt-5">
          {data.social.links.map((link, index) => (
            <div className='bg-[#3569B2] w-12 h-12 p-3.5 rounded-md'>
              <Link key={index} to={link.link} target="_blank" className='flex items-center justify-center' rel="noopener noreferrer">
                <Img fluid={link.icon.childImageSharp.fluid} alt="team" className={'w-full object-contain'} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer