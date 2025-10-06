import React, { useCallback, useState } from 'react'
import Img from 'gatsby-image'
import { ChevronDown, ChevronUp, Menu } from 'lucide-react'
import { Link, } from 'gatsby'
import SideBar from './SideBar'

const Navbar = ({ data }) => {
  const [open, setopen] = useState(false)
  const [openSidebar, setopenSidebar] = useState(false)

  const handleOpen = useCallback(() => {
    setopen(!open)
  }, [open]);


  return <div className='block--wrapper relative z-40'>
    <div className="custom_container py-4 ">
      <div className='justify-between flex items-center'>
        <div className='flex items-center gap-3'>
          <button onClick={() => setopenSidebar(true)} type='button' className='bg-white max-lg:block hidden border border-gray-200 cursor-pointer p-2 rounded-sm text-blue-900/90'><Menu size={20} /></button>
          <Link to='/en' className='flex  gap-2 items-center'>
            <Img fluid={data.logo.childImageSharp.fluid} alt="logo" className=' w-18 md:w-22' />
            <div className='flex flex-col text-start'>
              {data?.name?.map((item, index) => <h1 key={index} className=' text-xs md:text-sm text-blue-900/90 font-bold'>{item}</h1>)}
            </div>
          </Link>
        </div>
        <div className='flex items-center gap-4 text-sm 2xl:text-base'>
          <button type="button" className="bg-blue-900/90 hidden sm:block  cursor-pointer px-5 py-2 rounded-sm text-white">{data.profile}</button>
          <div className='relative '>
            <button on onClick={handleOpen} type="button" className=' language group relative flex items-center cursor-pointer  p-2 rounded-sm text-blue-900/90 border gap-1 border-gray-200 '>
              {window.location.pathname.includes('uz') ? 'Uzb' : window.location.pathname.includes('ru') ? 'Рус' : "Eng"}
              <span className='language'><ChevronDown size={20} className='language' /></span>
            </button>
            <div className={`left-0 w-full     top-full absolute ${open ? 'block' : 'hidden'}`}><ul className='p-2 overflow-hidden bg-white border border-gray-200 rounded-sm mt-2 space-y-2'>
              {data.language.map((item, index) => <li key={index} >
                <Link className='w-full text-center text-color hover:bg-blue-200/20 cursor-pointer' to={`/${item.value}/`}>
                  {item.label}</Link>
              </li>)}
            </ul></div>
          </div>
        </div>
      </div>
    </div>
    <div className='border-t border-t-blue-900/10'>
      <div className="custom_container">
        <ul className=" items-center gap-4 hidden lg:flex">
          {data.navlinks.map((item, index) => <li key={index} className=''>
            <Link className='flex gap-2 text-center items-center py-4 px-2 text-color  cursor-pointer' to={`/`}>
              {item} {index < 3 && <ChevronUp size={20} className='language' />}</Link>
          </li>)}
        </ul>
      </div>
    </div>
    <SideBar links={data.navlinks} open={openSidebar} setOpen={() => setopenSidebar(false)} />
  </div>
}


export default Navbar 