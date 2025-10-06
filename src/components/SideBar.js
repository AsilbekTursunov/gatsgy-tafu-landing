import React from 'react'
import { Link } from 'gatsby'
import { ChevronUp, X } from 'lucide-react'
const SideBar = ({ links, open, setOpen }) => {
  return (
    <div className={`absolute top-0 transition-all duration-300 ease-in-out left-0 w-full transform items-start flex h-screen bg-gray-900/50 z-40 ${open ? '-translate-x-0' : '-translate-x-full'}`}>
      <div className="w-5/6 bg-white p-4 h-full">
        <ul className=" items-center gap-4 flex flex-col justify-start">
          {links.map((item, index) => <li key={index} className='w-full'>
            <Link className='flex gap-2 text-center items-center px-4 py-2 text-color  cursor-pointer' to={`/`}>
              {item} {index < 3 && <ChevronUp size={20} className='language' />}</Link>
          </li>)}
        </ul>
      </div>
      <div className="flex-1 p-4 h-full flex justify-start">
        <button onClick={setOpen} type="button" className='border h-fit border-white p-1 cursor-pointer outline-0 bg-transparent'>
          <X size={20} color='white' />
        </button>
      </div>
    </div>
  )
}

export default SideBar