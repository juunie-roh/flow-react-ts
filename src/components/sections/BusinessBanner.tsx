import React from 'react'

const BusinessBanner = () => {

  return (

    <section className="container__businessBanner">
      <div className="container__inner">
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
      </div>
    </section>

  )
  
}

export default BusinessBanner