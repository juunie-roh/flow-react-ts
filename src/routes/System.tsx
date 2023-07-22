import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import { ArticleProps } from '../types/props';
import { Article } from '../containers/articles';

import '../styles/common.css'

const System = () => {

  const target = 'system';
  const articles: Array<ArticleProps> = [
    {
      title: ["AD・SSO연동", null],
      sub_title: '사내 시스템과 통합된 계정으로 편리하게 사용하세요.',
      target: target,
      number: 1
    },
    {
      title: ["조직도 연동", null],
      sub_title: '조직도를 연동하시면 직원 입・퇴사에 따른 보안강화는 물론 부서단위의 협업이 더 빠르고 쉬워집니다.',
      target: target,
      number: 2
    },
    {
      title: ["PUSH 알림 연동", null],
      sub_title: '플로우 하나에서 사내 시스템은 물론 3rd Party 솔루션의 다양한 알림을 받아보세요.',
      target: target,
      number: 3
    },
    {
      title: ["그외 API 연동", null],
      sub_title: '플로우의 OPEN API를 활용하여 시스템 통합을 이루어 내세요.',
      target: target,
      number: 4
    }
  ]

  return (

    <main>
      <ProductMainBanner title={["편의성을 한층 높인", "사내 시스템 연동"]}
                         sub_title={["구글・드롭박스 등 세계 최고 소프트웨어는 물론", "우리회사의 그룹웨어・ERP 등 사내 시스템과도 연동할 수 있습니다."]}
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

export default System