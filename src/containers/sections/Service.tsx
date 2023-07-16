import React from 'react'
import InnerLayout from '../../layouts/InnerLayout';

const Service = () => {

  return (

    <section className="container__service">
      <InnerLayout>
        <h2>
          국내 유일! 3가지 중
          <br />
          맞춤형 서비스를 선택하세요
        </h2>
        <div className="saas">
          <div className="title">클라우드형 (SaaS)</div>
          <i></i>
          <div className="content">
            <ul>
              <li>중소·스타트업 추천</li>
              <li>공공 CSAP 인증 (KT Bizworks)</li>
              <li>비영리기관 50% 할인 적용</li>
              <li>연결제 기준 가격(VAT는 별도)</li>
            </ul>
            <a href="#">
              10인 ₩ 60,000 월간<i className='bx bx-chevron-right' ></i>
            </a>
          </div>
        </div>
        <div className="onPremise">
          <div className="title">서버구축형 (On-Premise)</div>
          <i></i>
          <div className="content">
            <ul>
              <li>망분리 환경의 대기업/금융기관</li>
              <li>대형 공공기관 추천</li>
              <li>3개월 이내 설치 완료</li>
              <li>연동확장성 높음</li>
            </ul>
            <a href="#">
              가격 문의하기<i className='bx bx-chevron-right' ></i>
            </a>
          </div>
        </div>
      </InnerLayout>
    </section>

  );
}

export default Service