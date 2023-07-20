import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'

import '../styles/common.css'

const Security = () => {

  const target = 'security';

  return (

    <main>
      <ProductMainBanner title={["협업툴 플로우만의", "안전한 보안 시스템"]}
                         sub_title={["최고의 전문 인력이 관리하는 플로우만의 보안 체계, 언제라도", "대응 할 수 있도록 보안 인력이 상시 대기하고 있습니다."]}
                         target={target}
      />

      <ProductBusinessBanner />
    </main>

  )

}

export default Security