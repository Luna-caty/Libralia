import React, { useContext } from 'react'
import Filter from '../components/Filter'
import AllBooks from '../components/AllBooks'
import { StoreContext } from '../Context/StoreContext'
function Shop() {
  const { setMenu } = useContext(StoreContext)
  setMenu('Shop')
  return (
    <div className='ShopPage' >
      <Filter />
      <AllBooks />
    </div>


  )
}

export default Shop
