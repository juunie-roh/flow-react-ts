import React from 'react'
import { ProductInnerLayout } from '../layouts'

const Project = () => {

  return (
    <main>
      <section className="container__p_banner">
        <ProductInnerLayout>
          <div className="text-wrap">
            <h2 className="text-title">
              프로젝트 협업
              <br />
              올인원 관리
            </h2>
            <p className="text-sub-title">
              프로젝트 중심으로 모여 동일 부서가 아니더라도 관련자들과
              <br />
              리얼타임으로 소통이 가능합니다.
            </p>
            <a href="">무료로 시작하기<i className='bx bx-chevron-right' style={{ color: "#ffffff" }}></i></a>
          </div>
          <div className="img-wrap">
            <img src="../images/project/content-0.png" alt="프로젝트 배너 이미지" />
          </div>
        </ProductInnerLayout>
      </section>

      <article className="content-1">
        <div className="container__inner">
          <div className="contents-wrap">
            <div className="img-wrap">
              <img src="../images/project/content-1.png" alt="" />
            </div>
            <div className="text-wrap">
              <h2 className="text-title">쉽고 강력한 히스토리 관리</h2>
              <p className="text-content">
                친숙한 SNS 피드 형태의 게시물로 업무를 공유하고 히스토리를 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="content-2">
        <div className="container__inner">
          <div className="contents-wrap">
            <div className="img-wrap">
              <img src="../images/project/content-2.png" alt="" />
            </div>
            <div className="text-wrap">
              <h2 className="text-title">
                스마트한 파일 관리
                <br />
                데스크탑과 모바일의 동기화
              </h2>
              <p className="text-content">
                데스크탑과 모바일의 파일 동기화로 프로젝트 별 파일과 자료를 무기한
                보관하고 신속히 검색해 찾아볼 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="content-3">
        <div className="container__inner">
          <div className="contents-wrap">
            <div className="img-wrap">
              <img src="../images/project/content-3.png" alt="" />
            </div>
            <div className="text-wrap">
              <h2 className="text-title">
                일정 공유 스마트 캘린더
              </h2>
              <p className="text-content">
                위치기반의 구글맵 & 플로우 캘린더와 연동되어 회의・미팅・출장 등 일정을 쉽고 빠르게 공유할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="content-4">
        <div className="container__inner">
          <div className="contents-wrap">
            <div className="img-wrap">
              <img src="../images/project/content-4.png" alt="" />
            </div>
            <div className="text-wrap">
              <h2 className="text-title">
                외부인 및 협력사 초대
              </h2>
              <p className="text-content">
                카OO톡・네이O온・메일... 등 흩어져 있는 외부 협력사와 유기적인 소통이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="content-5">
        <div className="container__inner">
          <div className="contents-wrap">
            <div className="img-wrap">
              <img src="../images/project/content-5.png" alt="" />
            </div>
            <div className="text-wrap">
              <h2 className="text-title">
                관리자 · 참여자 권한 구분
              </h2>
              <p className="text-content">
                프로젝트 관리자와 일반 참여자간의 작성 및 조회 권한을 차등화하여 보안을 강화할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="container__businessBanner">
        <div className="cover">
          <div className="container__inner">
            <div className="text">
              <div className="flow-symbols">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <p className="text-subtitle">
                메신저・프로젝트 소통・워크플로우
                <br />
                화상회의까지 ㅡ
                <br />
                이 모든 기능을 플로우로 체험해보세요.
              </p>
              <a href="">
                무료체험 시작하기
                <i className='bx bxs-chevron-right'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Project