import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import { ArticleProps } from '../types/props';
import { Article } from '../containers/articles';

import '../styles/common.css'

const Download = () => {

  const target = 'download';
  const articles: Array<ArticleProps> = [
    {
      title: ["데스크탑 앱 다운로드", null],
      sub_title: '전용 앱을 통해 더욱 쉽고 빠르게 프로젝트와 업무를 관리할 수 있습니다.',
      target: target,
      number: 1
    },
    {
      title: ["스마트폰ㆍ태블릿 앱 다운로드", null],
      sub_title: '플로우 앱으로 언제 어디서나 팀원과 협업 할 수 있습니다.',
      target: target,
      number: 2
    }
  ]

  return (

    <main>
      <ProductMainBanner 
        title={["다운로드", null]}
        sub_title={["언제 어디서든 쉽고 빠르게 플로우를 이용해 보세요.", null]}
        target={target}
      />

      {
        articles.map((article: ArticleProps) => (
          <Article 
            key={`${target}${article.number}`}
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

export default Download