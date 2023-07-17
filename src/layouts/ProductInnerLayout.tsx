import React from 'react'
import './ProductInnerLayout.css'

const ProductInnerLayout = ({ children }: any) => {
  return (
    <div className='container__p_inner'>
      { children }
    </div>
  )
}

export default ProductInnerLayout