import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import { ArticleProps } from '../types/props';
import { Article } from '../containers/articles';

import '../styles/common.css'

const Okr = () => {

  const target = 'okr';
  const articles: Array<ArticleProps> = [
    {
      target: target,
      number: 1,
      title: ["목표를 하나로 몰입", null],
      sub_title: '회사의 가장 중요한 상위 목표를 정하고 팀 별 하이라키 형태로 하위 목표를 연결하여 전사가 하나의 방향성에 맞춰 몰입할 수 있습니다.'
    },
    {
      target: target,
      number: 2,
      title: ["숫자 결과를 한눈에", null],
      sub_title: '목표를 위해 달성해야하는 결과를 수치화하고 데이터 대시보드로 현황을 한눈에 파악하여 지속적인 성과 관리가 가능합니다.'
    },
    {
      target: target,
      number: 3,
      title: ["회사 - 팀 - 개인간 목표 연결", null],
      sub_title: '플로우 OKR 제품은 단편적인 OKR 관리만 하는 툴과는 다릅니다. 회사의 목표 - 팀 프로젝트- 개인 업무가 하나로 연결되어 더 강력한 결과를 얻을 수 있습니다.'
    },
    {
      target: target,
      number: 4,
      title: ["주간 리포트 자동화", null],
      sub_title: '지난 한 주간 성과를 모아 OKR별 주간 리포트를 작성할 수 있으며 반복된 보고 작업의 수고를 덜 수 있습니다.'
    }
  ]

  return (

    <main>
      <ProductMainBanner title={["OKR 목표관리와", "업무를 한번에"]}
                         sub_title={["가장 중요한 목표와 핵심 업무에 100% 집중하세요.", null]}
                         target={target}
      />

      {
        articles.map((article: ArticleProps) => (
          <Article key={`${target}${article.number}`}
                   title={article.title}
                   sub_title={article.sub_title}
                   target={article.target}
                   number={article.number}
          />
        ))
      }

      <ProductBusinessBanner />
    </main>

  )

}

export default Okr