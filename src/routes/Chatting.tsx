import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import { ArticleProps } from '../types/props';
import { Article } from '../containers/articles';

import '../styles/common.css'

const Chatting = () => {

  const target = 'chatting';
  const articles: Array<ArticleProps> = [
    {
      target: target,
      number: 1,
      title: ["데스크탑에서 사용하는 채팅", "모바일 앱에서도 간편하게"],
      sub_title: '외근・미팅・출장 등으로 외부 근무중일 경우 모바일 앱으로 접속하여 실시간 소통이 가능합니다.'
    },
    {
      target: target,
      number: 2,
      title: ["실시간 읽음 확인", null],
      sub_title: '발신자가 수신자의 실시간 읽음 상태까지 파악하여 더욱 효율적으로 커뮤니케이션할 수 있습니다.'
    },
    {
      target: target,
      number: 3,
      title: ["조직의 비밀을 지키는", "시크릿 보안 채팅"],
      sub_title: '시크릿 채팅을 이용하면 서버상의 기록도 완전히 삭제되어 우리 조직의 비밀을 완벽하게 지킬 수 있습니다.'
    },
    {
      target: target,
      number: 4,
      title: ["주고받은 메시지・파일・링크", "간편하게 검색하기"],
      sub_title: '채팅방에서 주고받은 메시지・이미지・파일・링크를 편리하고 쉽게 검색하실 수 있습니다.'
    },
    {
      target: target,
      number: 5,
      title: ["사내 시스템 연동메시지", "전 직원 실시간 전송"],
      sub_title: '기존의 사용 중인 사내 시스템과 연동되어 우리 조직에 최적화된 실시간 알림을 받을 수 있습니다.'
    },
  ]

  return (

    <main>
      <ProductMainBanner 
        title={["조직도로 연결된", "편리한 메신저"]}
        sub_title={["조직 구성원의 연락처・이메일・내선번호를 확인 후 보다", "빠르고 정확한 업무 소통을 할 수 있습니다."]}
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

export default Chatting