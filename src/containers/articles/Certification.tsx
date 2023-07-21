import React from 'react'
import { ProductInnerLayout } from '../../layouts'
import { CertificationCardLiProps } from '../../types/props'
import CertificationCardLi from '../../components/CertificationCardLi'

import './Article.css'
import './Certification.css'

const Certification = () => {

  const cards: Array<CertificationCardLiProps> = [
    {
      number: 1,
      title: "ISO/IEC 27001 : 2013",
      sub_title: "가장 엄격한 정보보안의 글로벌 표준 인증서",
      isLink: true,
      href: "/"
    },
    {
      number: 2,
      title: "CSA STAR",
      sub_title: "클라우드 컴퓨팅 서비스를 제공하는 조직에 대한 글로벌 인증서",
      isLink: true,
      href: "/"
    },
    {
      number: 3,
      title: "GS 인증 1등급",
      sub_title: "flow.team 제품의 정보보안 소프트웨어 품질 인증",
      isLink: true,
      href: "/"
    },
    {
      number: 4,
      title: "GDPR 준수",
      sub_title: "EU(유럽연합)의 개인정보보호 법령 준수",
      isLink: false,
      href: "/"
    },
  ]

  return (
    <article className="certification">
      <ProductInnerLayout>
        <div className="contents-wrap">

          <div className="text-wrap">
            <h2 className="text-title">
              정보보호 인증서 및 준수
            </h2>
          </div>

          <ul className="card-wrap">
            {
              cards.map((card: CertificationCardLiProps) => (
                <CertificationCardLi key={"CertificationCard-" + card.number}
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
        {/* contents-wrap */}
      </ProductInnerLayout>
    </article>
  )
}

export default Certification