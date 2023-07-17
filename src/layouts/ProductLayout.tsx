import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductLayout = () => {

  return (
    <main>
      <Outlet />
    </main>
  )
  
}

export default ProductLayout