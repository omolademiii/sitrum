import React from 'react'
import Line from './Line'

const Creators = ({createData}) => {
    const { id, create1, create2, identity, tax} = createData;
  return (
    <div className='border-2 border-[#CDD2D4]/[.3] rounded-sm'>
      <div className='relative mb-10 mt-2 ml-2 mr-2'>
        <img src={create1} alt={Image} />
        <img className='absolute w-[48px] h-[48px] mt-[-30px] ml-3 ' src={create2} alt={Image} />
      </div>
      <h1 className='text-[#FDFDFD] text-[20px] leading-10 font-medium mb-2 pl-2'>{identity}</h1>
      <div className='w-[-100px]'>
        <Line />
      </div>
      <div className='flex justify-between px-3 pt-4 pb-3'>
        <div>
            <h1 className='text-[#FDFDFD] text-[14px] leading-4 font-small'>Items</h1>
            <h1 className='text-[#FDFDFD] text-[20px] leading-8 font-medium pt-1'>{tax}</h1>
        </div>
        <div>
            <button className='bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% px-6 py-2 text-[#FDFDFD] text-[14px] leading-5 font-small rounded-sm'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Creators
