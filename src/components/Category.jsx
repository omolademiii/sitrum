import React from 'react'
import data from '../utils/sitron.json'
import SingleCategory from './SingleCategory'
import SingleTrend from './SingleTrend'
import SingleCollection from './SingleCollection'
import TopCollection from './TopCollection'
import Creators from './Creators'
import Coming from './Coming'

const categories = data.category
const trends = data.trending
const collect = data.collection
const topcollect = data.top
const creation = data.create
const come = data.comer

const Category = () => {
  return (
    <div>
      <div className='mt-24 mx-36'>
      <h1 className='text-[#FDFDFD] text-[60px] font-medium'>Categories</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-24 mt-6'>
      {
        categories.map(category => <SingleCategory key={category.id} categoryData={category} />)
      }
      </div>

      </div>

      <div className='mx-36 mt-36'>
        <div className='flex justify-between'>
          <h1 className='text-[#FDFDFD] text-[60px] font-medium'>
            Trending
          </h1>
          <a href="#" className='text-[#F2C289] text-[20px] leading-[24px] font-medium mt-11'>
          VIEW ALL TRENDING ITEMS
          </a>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-x-12 mt-16'>
          {
            trends.map(trending => <SingleTrend key={trending.id} trendingData={trending} />)
          }
        </div>
      </div>

      <div className='mx-36 mt-36'>
      <div className='flex justify-between'>
          <h1 className='text-[#FDFDFD] text-[60px] font-medium'>
            Collection
          </h1>
          <a href="#" className='text-[#F2C289] text-[20px] leading-[24px] font-medium mt-11'>
          VIEW ALL TRENDING COLLECTIONS
          </a>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-16 gap-x-8 gap-y-4'>
          {
            collect.map(collection => <SingleCollection key={collection.id} collectionData={collection} />)
          }
        </div>
      </div>

      <div className='mx-36 mt-36'>
      <div className='flex justify-between'>
          <h1 className='text-[#FDFDFD] text-[60px] font-medium'>
            Top Collection
          </h1>
          <a href="#" className='text-[#F2C289] text-[20px] leading-[24px] font-medium mt-11'>
          VIEW ALL TRENDING COLLECTIONS
          </a>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 mt-16'>
          {
            topcollect.map(top => <TopCollection key={top.id} topData={top} />)
          }
        </div>
      </div>

      <div className='mx-36 mt-36'>
        <h1 className='text-[#FDFDFD] text-[60px] font-medium'> Top Creations</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-16 gap-x-8 gap-y-4'> 
          {
            creation.map(create => <Creators key={create.id} createData={create} />)
          }
        </div>
      </div>

      <div className='mx-36 mt-36'>
        <h1 className='text-[#FDFDFD] text-[60px] font-medium'> Coming Soon!</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-16 gap-x-8 gap-y-4'> 
          {
            come.map(comer => <Coming key={comer.id} comerData={comer} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Category
