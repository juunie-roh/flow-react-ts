import React from 'react'
import { ProductInnerLayout } from '../../layouts'
import { CardLiProps } from '../../types/props'
import PrivacyCardLi from '../../components/PrivacyCardLi'

import './SecurityPrivacy.css'

const SecurityPrivacy = () => {

  const cards: Array<CardLiProps> = [
    {
      number: 1,
      title: "해외 개인정보 GDPR 준수",
      sub_title: "플로우 글로벌팀은 EU 유럽연합 국가 전체에 해당되는 개인정보 보호 정책을 준수 합니다.",
      isLink: false,
      href: undefined
    },
    {
      number: 2,
      title: "개인정보 처리 방침",
      sub_title: "플로우 서비스의 개인정보처리 방침을 확인하세요.",
      isLink: true,
      href: "/"
    },
    {
      number: 3,
      title: "개인정보 데이터 암호화",
      sub_title: "모든 개인정보는 100% 암호화된 상태로 안전하게 저장됩니다.",
      isLink: false,
      href: undefined
    },
  ]

  return (

    <article className="privacy">
      <ProductInnerLayout>
        <div className="contents-wrap">

          <div className="text-wrap">
            <h2 className="text-title">
              개인정보 보안
            </h2>
            <p>
              플로우는 고객의 개인정보와 데이터를 안전하게 보호하기 위해 최선을 다합니다.
            </p>
          </div>

          <ul className="card-wrap">
            {
              cards.map((card) => (
                <PrivacyCardLi 
                  key={`privacy_card-${card.number}`}
                  number={card.number}
                  title={card.title}
                  sub_title={card.sub_title}
                  isLink={card.isLink}
                  href={card.href}
                />
              ))
            }
          </ul>

        </div>
      </ProductInnerLayout>
    </article>

  )

}

export default SecurityPrivacy