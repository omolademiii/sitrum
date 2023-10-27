import React from 'react'
import TrendingIconTwo from './TrendingIconTwo'
import Line from './Line'
import TrendingIconOne from './TrendingIconOne';

const SingleCollection = ({collectionData}) => {
    const {id, collect1, collect2, title, available, price} = collectionData;
  return (
    <div className='border-2 border-[#CDD2D4]/[.3] rounded-sm'>
      <div className='relative mb-10 mt-2 ml-2 mr-2'>
        <img src={collect1} alt={Image} />
        <img className='absolute w-[48px] h-[48px] mt-[-30px] ml-3 ' src={collect2} alt={Image} />
      </div>
      <h1 className='text-[#FDFDFD] text-[24px] leading-9 font-medium mb-2 pl-2'>{title}</h1>
      <div className='w-[-100px]'>
        <Line />
      </div>
      <div className='flex justify-between px-3 pt-5'>
        <h1 className='text-[#FDFDFD] text-[16px] leading-4 font-small'>Available</h1>
        <h1 className='text-[#FDFDFD] text-[16px] leading-4 font-small tracking-tight'> Floor price</h1>
      </div>
      <div className='flex justify-between px-3 pb-4 pt-2'>
        <h1 className='text-[#FDFDFD] text-[20px] leading-8 font-medium'>{available}</h1>
        <div className='flex'>
            <TrendingIconOne />
            <h1 className='text-[#FDFDFD] text-[20px] leading-8 font-medium'>{price}</h1>
        </div>
      </div>
    </div>
  )
}

export default SingleCollection
