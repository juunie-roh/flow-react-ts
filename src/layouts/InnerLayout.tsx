import React from 'react'
import './InnerLayout.css'

const InnerLayout = ({ children }: any) => {
  return (
    <div className='container__inner'>
      { children }
    </div>
  )
}

export default InnerLayout