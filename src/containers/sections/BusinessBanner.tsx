import React from 'react'
import InnerLayout from '../../layouts/InnerLayout'

const BusinessBanner = () => {

  return (

    <section className="container__businessBanner">
      <InnerLayout>
        <div className="text">
          <div className="flow-symbols">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <p>가입만 하면 무료로 쓸 수 있어요!</p>
          <ul>
            <li>신용카드 등록없이</li>
            <li>30일 무료 체험판</li>
          </ul>
          <a href="">
            무료체험 시작하기
            <i className='bx bxs-chevron-right'></i>
          </a>
        </div>
      </InnerLayout>
    </section>

  )
  
}

export default BusinessBanner