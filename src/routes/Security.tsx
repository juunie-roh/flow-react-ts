import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'
import { Article } from '../containers/articles';

import '../styles/common.css'

const Security = () => {

  const target = 'security';

  return (

    <main>
      <ProductMainBanner title={["협업툴 플로우만의", "안전한 보안 시스템"]}
                         sub_title={["최고의 전문 인력이 관리하는 플로우만의 보안 체계, 언제라도", "대응 할 수 있도록 보안 인력이 상시 대기하고 있습니다."]}
                         target={target}
      />

      <Article target={target}
               number={4}
               title={["강력한 AWS 클라우드 보안", null]}
               sub_title="플로우의 제품은 세계 최고 수준의 클라우드 인프라 보안을 갖춘 AWS를 사용해 고객님의 데이터를 100% 암호화합니다. 또 다양한 툴을 이용해 해킹, 바이러스 등의 위협을 차단하여 고객의 모든 정보를 안전하게 저장 합니다."
      />

      

      <ProductBusinessBanner />
    </main>

  )

}

export default Security