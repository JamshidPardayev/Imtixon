import React from 'react'
import CategorySection from './CategorySection/page'
import Products from './Products/page'

const Categories = () => {
  return (
    <div className='flex gap-x-[50px] max-w-[1200px] justify-between mx-auto px-[15px] py-[30px] my-[30px]'>
      <div>
      <CategorySection />
      </div>
      <div>
        <Products />
      </div>
    </div>
  )
}

export default Categories
