import React from 'react'
import InnerLayout from '../../layouts/InnerLayout'

const Example = () => {
  return (
    <section className="container__example">
      <InnerLayout>
        <div className="image">
          <img src="./images/main/main-team.svg" alt="" />
          <img src="./images/main/main-team-mb.png" alt="" />
        </div>
        <div className="text">
          <h2>
            모든 팀이 플로우로
            <br />
            함께 협업해요!
          </h2>
          <p>
            대한민국 450,000개 팀이 플로우 하나로
            <br />
            완벽한 트로젝트 협업을 합니다.
          </p>
          <a href="#" className="activeLink">
            <i></i>
            고객 성공사례 보기
          </a>
        </div>
      </InnerLayout>
    </section>
  )
}

export default Example