import React from 'react'
import { Outlet } from 'react-router-dom'
import './ProductLayout.css'

const ProductLayout = () => {

  return (
    <main>
      <Outlet />
    </main>
  )
  
}

export default ProductLayout