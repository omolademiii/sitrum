import React from 'react'
import Line from './Line'

const Coming = ({comerData}) => {
    const {id, comer1, comer2, clause, date } = comerData;
  return (
    <div className='border-2 border-[#CDD2D4]/[.3] rounded-sm'>
      <div className='relative mb-10 mt-2 ml-2 mr-2'>
        <img src={comer1} alt={Image} />
        <img className='absolute w-[48px] h-[48px] mt-[-30px] ml-3 ' src={comer2} alt={Image} />
      </div>
      <h1 className='text-[#FDFDFD] text-[20px] leading-10 font-medium mb-2 pl-2'>{clause}</h1>
      <div className='w-[-100px]'>
        <Line />
      </div>
      <div className='mt-3 mx-3 mb-4'>
        <h1 className='text-[#FDFDFD] text-[14px] leading-4'> Launch Date</h1>
        <h1 className='text-[#FDFDFD] text-[20px] leading-8 mt-2'>{date}</h1>
      </div>
    </div>
  )
}

export default Coming
