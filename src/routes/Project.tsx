import React from 'react'
import { ProductMainBanner, ProductBusinessBanner } from '../containers/sections'
import Article from '../containers/articles/Article'

import '../styles/common.css'

const Project = () => {

  const target = 'project';

  return (
    <main>
      <ProductMainBanner title={["프로젝트 협업", "올인원 관리"]}
                         sub_title={["프로젝트 중심으로 모여 동일 부서가 아니더라도 관련자들과", "리얼타임으로 소통이 가능합니다."]}
                         target={target}
      />

      <Article title={["쉽고 강력한 히스토리 관리", null]}
               sub_title="친숙한 SNS 피드 형태의 게시물로 업무를 공유하고 히스토리를 관리합니다."
               target={target}
               number={1}
      />

      <Article title={["스마트한 파일 관리", "데스크탑과 모바일의 동기화"]}
               sub_title="데스크탑과 모바일의 파일 동기화로 프로젝트 별 파일과 자료를 무기한
                          보관하고 신속히 검색해 찾아볼 수 있습니다."
               target={target}
               number={2}
      />

      <Article title={["일정 공유 스마트 캘린더", null]}
               sub_title="위치기반의 구글맵 & 플로우 캘린더와 연동되어 회의・미팅・출장 등 일정을 쉽고 빠르게 공유할 수 있습니다."
               target={target}
               number={3}
      />
      
      <Article title={["외부인 및 협력사 초대", null]}
               sub_title="카OO톡・네이O온・메일... 등 흩어져 있는 외부 협력사와 유기적인 소통이 가능합니다."
               target={target}
               number={4}
      />
      
      <Article title={["관리자 · 참여자 권한 구분", null]}
               sub_title="프로젝트 관리자와 일반 참여자간의 작성 및 조회 권한을 차등화하여 보안을 강화할 수 있습니다."
               target={target}
               number={5}
      />
      
      <ProductBusinessBanner />
    </main>
  )
}

export default Project