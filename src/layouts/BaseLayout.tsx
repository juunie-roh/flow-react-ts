import React from 'react'
import { Outlet } from 'react-router-dom'
import './BaseLayout.css'

const BaseLayout = () => {
  return (
    <div className='container__page'>
      <Outlet />
    </div>
  )
}

export default BaseLayout