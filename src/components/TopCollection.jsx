import React from 'react'
import TrendingIconOne from './TrendingIconOne';

const TopCollection = ({topData}) => {
  const {id, picture, picture2, word, amount, point} = topData;
  return (
    <div className='border-2 border-[#CDD2D4]/[0.5] rounded-sm'>
      <img className='w-[484px] h-[498px]' src={picture} alt={Image} />
      <div className='flex justify-between mt-7 mx-4'>
        <div className='flex'>
            <img className='w-[-48px] h-[40px]' src={picture2} alt={Image} />
            <h1 className='text-[#FDFDFD] text-[28px] leading-10 font-semibold pl-3'>{word}</h1>
        </div>
        <h1 className='text-[#FDFDFD] text-[16px] leading-8 font-semibold border px-2 rounded-3xl border-[#F5FFFA]/[.05] '> Collection name</h1>
      </div>
      <div className='flex justify-between mx-4 mt-6'>
        <h1 className='text-[#FDFDFD] text-[16px] leading-4 font-small'>Available</h1>
        <h1 className='text-[#FDFDFD] text-[16px] leading-4 font-small mr-10'> Floor price</h1>
      </div>
      <div className='flex justify-between mx-4 mt-2 mb-8'>
        <h1 className='text-[#FDFDFD] text-[20px] leading-8 font-medium'>{amount}</h1>
        <div className='flex'>
            <TrendingIconOne />
            <h1 className='text-[#FDFDFD] text-[20px] leading-8 font-medium mr-16'>{point}</h1>
        </div>
      </div>
    </div>
  )
}

export default TopCollection
