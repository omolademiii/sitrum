import React from 'react'
import IconOne from './IconOne'
import IconTwo from './IconTwo'
import SitrumIcon from './SitrumIcon'
import HeaderSearch from './HeaderSearch'


const Header = () => {
    
  return (
    <div className='pt-8'>
    <nav className='mx-14 mt-2 flex px-20 py-2 justify-between items-center bg-slate-900 rounded-md border-[#F5FFFA]/[.2]'>
      <div> 
        <h1 className='text-white'>
            <SitrumIcon />
        </h1>
      </div>
      <div className='flex justify-between border-[0.01px] border-[#383A38]/[.25] w-[400px] h-[40px] rounded-sm py-1'>
        <HeaderSearch />
         <h1 className=' w-96 text-[#FDFDFD] pl-1'>Search items, collection, account e.t.c</h1>
        
      </div>
      <div className='hidden lg:block'>
          <ul className='flex text-[#FDFDFD] gap-8  items-center'>
            <li>Explore</li>
            <li>About</li>
            <li>Stats</li>
            <li> <IconTwo /> </li>
            <li> <IconOne /> </li>
            <li className='px-5 py-1 bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10%  text-[#fff] rounded-md capitalize'>Create</li>
          </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header
