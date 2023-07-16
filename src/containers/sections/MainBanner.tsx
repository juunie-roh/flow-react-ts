import React from 'react'
import InnerLayout from '../../layouts/InnerLayout';

const MainBanner = () => {
  const styleArrowRight = { color: "#ffffff" };

  return (

    <section className="container__mainBanner">
      <InnerLayout>
        <div className="titleBox">
          <p>대한민국에서 가장 많이 검증된 1위</p>
          <h2>프로젝트 관리 ㅡ <br /> 협업툴 <span>플로우</span></h2>
          <a href="">무료로 시작하기<i className='bx bx-chevron-right' style={ styleArrowRight }></i></a>
        </div>

        <div className="imageBox">
          <div id="main-obj">
            <i></i>
            <span id="request">Request 45,343</span>
            <span id="progress">Progress 45,782</span>
            <span id="feedback">Feedback 13,678</span>
          </div>
          <div id="sub-obj">
            <i></i>
          </div>
          <div id="pj-web"></div>
        </div>
      </InnerLayout>
    </section>
  )

}

export default MainBanner