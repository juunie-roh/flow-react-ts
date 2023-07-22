import React from 'react'
import { ProductInnerLayout } from '../../layouts'
import { CardLiProps } from '../../types/props'
import CloudServiceCardLi from '../../components/CloudServiceCardLi'

import './SecurityCloudService.css'

const SecurityCloudService = () => {

  const cards: Array<CardLiProps> = [
    {
      number: 1,
      title: "CSA STAR",
      sub_title: "클라우드 컴퓨팅 서비스를 제공하는 조직에 대한 글로벌 인증서",
      isLink: false,
      href: undefined
    },
    {
      number: 2,
      title: "GS등급 1등급",
      sub_title: "flow.team 제품의 정보보안 소프트웨어 품질 인증",
      isLink: false,
      href: undefined
    }
  ]

  return (

    <article className="cloud-service">
          <ProductInnerLayout>
            <div className="contents-wrap">

              <div className="text-wrap">
                <h2 className="text-title">
                  클라우드 서비스 보안
                </h2>
                <p>
                  플로우는 국내뿐만 아니라 해외에서도 인증된 안전한 클라우스 서비스를 고객에게 제공합니다.
                </p>
              </div>

              <div className="card">
                <ul>
                  {
                    cards.map((card) => (
                      <CloudServiceCardLi key={"CloudServiceCard-" + card.number}
                                          number={card.number}
                                          title={card.title}
                                          sub_title={card.sub_title}
                                          isLink={false}
                                          href={undefined}
                      />
                    ))
                  }
                </ul>
                <img src="./images/security/content-6.png" alt="" />
              </div>

            </div>
          </ProductInnerLayout>
        </article>
  )
}

export default SecurityCloudService