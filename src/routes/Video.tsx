import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import { ArticleProps } from '../types/props';
import { Article } from '../containers/articles';

import '../styles/common.css'

const Video = () => {

  const target = 'video';
  const articles: Array<ArticleProps> = [
    {
      target: target,
      number: 1,
      title: ["화상회의 연동 서비스 지원", null],
      sub_title: "Zoom, Microsoft Teams 화상회의 서비스 연동을 지원합니다. 구축형 서비스의 경우 Cisco Webex 등의 화상회의 서비스를 추가로 연동할 수 있습니다."
    },
    {
      target: target,
      number: 2,
      title: ["채팅방에서 즉석 화상회의", null],
      sub_title: "채팅방에서 화상회의를 바로 만들고 초대할 수 있습니다. 초대를 받은 사람은 누구나 참여 가능합니다."
    },
    {
      target: target,
      number: 3,
      title: ["화상회의 일정 등록하고", "참여자에게 링크 공유"],
      sub_title: "화상회의 일정을 프로젝트에 등록할 수 있습니다. 구성원들은 회의 일정을 확인하고 바로 참여할 수 있으며, 링크를 복사해 다른 참여자들에게 공유할 수도 있습니다."
    }
  ]

  return (

    <main>
      <ProductMainBanner title={["플로우에서", "화상회의 참여하기"]}
                         sub_title={["플로우 사용자들이 보다 효율적으로 회의할 수 있도록 화상회의 서비스를 지원합니다.", null]}
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

export default Video