import React from 'react'
import { InnerLayout } from '../../layouts'
import './Guide.css'

const Guide = () => {
  return (
    <section className="container__guide">
      <InnerLayout>
        <h2>
          협업툴 도입 전
          <br />
          이 자료는 꼭 체크하세요!
        </h2>
        <div className="cardWrap">
          <ul>
            <li className="card card1">
              <a href="#">
                <p>flow<span></span></p>
                <b>
                  국내외 협업툴
                  <br />
                  비교 18종
                </b>
                <i></i>
              </a>
              <div className="card_bg">
                <span>비교자료 ㅡ</span>
              </div>
            </li>
            <li className="card card2">
              <a href="#">
                <p>flow<span></span></p>
                <b>
                  협업툴 실패·성공
                  <br />
                  Best 5
                </b>
                <i></i>
              </a>
              <div className="card_bg">
                <span>필수자료 ㅡ</span>
              </div>
            </li>
            <li className="card card3">
              <a href="#">
                <p>flow<span></span></p>
                <b>
                  재택근무 매뉴얼
                  <br />
                  가이드
                </b>
                <i></i>
              </a>
              <div className="card_bg">
                <span>하이브리드 워크 ㅡ</span>
              </div>
            </li>
            <li className="card card4">
              <a href="#">
                <p>flow<span></span></p>
                <b>
                  협업툴 혁신기업
                  <br />
                  리포트
                </b>
                <i></i>
              </a>
              <div className="card_bg">
                <span>DX 4,000개 기업 ㅡ</span>
              </div>
            </li>
          </ul>
        </div>
      </InnerLayout>
    </section>
  )
}

export default Guide