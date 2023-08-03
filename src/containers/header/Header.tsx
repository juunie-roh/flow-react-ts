import React from 'react'
import Nav from '../../components/Nav'
import './Header.css'

const Header = () => {
  
  return (

    <header>

      <a href='/' className='thin'>
        <div className="thin_content">
          <div className="img"></div>
          <p>🎁 8주년 신규고객 이벤트!</p>
          <div className="icon">
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      </a>

      <div className="container__inner">
        <Nav />
      </div>

    </header>

  )
}

export default Header