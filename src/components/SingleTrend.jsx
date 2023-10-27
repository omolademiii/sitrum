import React from 'react'
import TrendingIconOne from './TrendingIconOne'
import TrendingIconTwo from './TrendingIconTwo'



const Trending = ({trendingData}) => {
  const { id, image, text, price, icon, rate, button } = trendingData;
  return (
    
    <div className=' border border-slate-800/[.15] rounded-md'>
      
      <img className='w-[-448.34px] h-[-462.19px]' src={image} alt={image} />
      <div className='flex justify-between pt-6 px-3'>
        <h1 className='text-[#FDFDFD] text-[24px] leading-9 font-semibold'>{text}</h1>
        <div className='flex'>
            <TrendingIconOne />
            <h1 className='text-[#FDFDFD] text-[24px] leading-9 font-semibold'>{price}</h1>
        </div>
      </div>
      <div className='flex justify-between pt-4 px-3'>
        <img className='w-[57px] h-[22px]' src={icon} alt={icon} />
        <div className='flex'>
            <TrendingIconTwo />
            <h2 className='text-[#FDFDFD] text-[16px] leading-9 font-medium'>{rate}</h2>
        </div>
      </div>
      <button className='bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% px-4 py-1 rounded-sm mt-4 mb-4 float-right mr-3 text-[#FDFDFD] text-[20px] leading-[30px] font-semibold'> {button}</button>
    </div>
  )
}

export default Trending
