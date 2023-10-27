import React from 'react'
import Banner1 from '/assets/images/2.png'
import Banner2 from '/assets/images/3.png'
import Banner3 from '/assets/images/Rectangle.png'
const Banner = () => {
  return (
    <div className='text-white flex justify-between gap-x-9 pl-36 pt-16'>
      <div>
        <h1 className='text-[64px] leading-[84px] tracking-wide font-medium'>
        Discover,<br /> 
Collect and <br /> Trade NFTs 
        </h1>
        <h3 className='mt-4 text-sm leading-[30px] font-normal'>Explore unlimited access to NFTs across multiple chain links <br /> with a single click.</h3>
        <div className='flex gap-8 mt-6'>
          <button className='border-2 border-orange-500 px-6 py-1 rounded-sm bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% text-transparent bg-clip-text'> create</button>
          <button className='bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% px-6 py-1 rounded-sm'> Explore</button>
        </div>
      </div>
      <div className='flex relative mr-[400px] '>
        <img className=' ml-[-160px] mt-[150px] w-[260px] h-[280px] absolute'src={Banner2} alt="" />
        <img className=' w-[300px h-[400px]'src={Banner3} alt="" />
        <img className=' ml-[340px] mt-[160px] w-[240px] h-[250px] absolute'src={Banner1} alt="" />
      </div>
    </div>
  )
}

export default Banner
