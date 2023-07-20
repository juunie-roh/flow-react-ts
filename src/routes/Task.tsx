import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import Article from '../containers/articles/Article';
import { ArticleProps } from '../types/props';

import '../styles/common.css'

const Task = () => {

  const target = 'task';
  const articles: Array<ArticleProps> = [
    {
      title: ["업무 리스트 자동화 스마트한 필터링", null],
      sub_title: '플로우에 등록된 모든 업무는 자동으로 리스트화되며, 전사의 업무를 한눈에 모니터링할 수 있습니다. 원하는 업무 구분 조건에 따라 빠르게 원하는 업무를 찾을 수 있습니다.',
      target: target,
      number: 1
    },
    {
      title: ["명확한 업무 요청", null],
      sub_title: '유용한 옵션을 지정해 명확한 업무 요청을 할 수 있습니다. 개인의 기억력에 의존하여 업무를 놓치지 마세요.',
      target: target,
      number: 2
    },
    {
      title: ["할 일 (To do) 리스트", null],
      sub_title: '간단한 업무는 할 일(To do) 리스트로 아주 쉽고 편리하게 관리할 수 있습니다.',
      target: target,
      number: 3
    },
    {
      title: ["실시간 업무 알림과", "다양한 알림 옵션"],
      sub_title: '동일 프로젝트 구성원들의 업무 진행 상태가 실시간 알림으로 전달되어 업무 공유가 편리해집니다.',
      target: target,
      number: 4
    },
    {
      title: ["간트차트(WBS)", null],
      sub_title: '직관적인 차트와 그리드 형태를 기반으로 프로젝트 계획, 실행을 유연하게 관리할 수 있습니다.',
      target: target,
      number: 5
    }
  ]

  return (

    <main>
      <ProductMainBanner title={["직관적 워크플로우", "효율적 업무관리"]}
                         sub_title={["업무 시작부터 종료까지 5단계 상태로 구분하여 직관적인 워크", "플로우 시스템을 제공합니다."]}
                         target={target}
      />

      {
        articles.map((article) => (
          <Article key={target + article.number}
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

export default Task