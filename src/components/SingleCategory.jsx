import React from 'react'
import Line1 from './Line1';

const SingleCategory = ({categoryData}) => {
  const { id, name, url } = categoryData;
  
  
  return (
    <div className=''>
      
      <div className='ml-12 border-2 border-[#CDD2D4]/[.3] rounded-sm w-[353px] h-[280px]'>
          <img  className='pt-2' src={url} alt={Image} />
          <div>
            <Line1 />
          </div>
          <h1 className='text-[#FDFDFD] text-[28px] leading-10 pt-3 pl-6'>{name}</h1>
        </div>
      </div>
      
    
  )
}

export default SingleCategory
