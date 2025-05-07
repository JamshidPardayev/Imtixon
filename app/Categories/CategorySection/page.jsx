import React from 'react'
import Category from './Category/page'
import PriceRange from './PriceRange/page'

const CategorySection = () => {
  return (
    <div className='w-[280px] max-md:hidden'>
      <Category />
      <PriceRange />
    </div>
  )
}

export default CategorySection
