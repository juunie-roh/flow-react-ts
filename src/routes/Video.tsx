import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'

import '../styles/common.css'

const Video = () => {

  const target = 'video';

  return (

    <main>
      <ProductMainBanner title={["플로우에서", "화상회의 참여하기"]}
                         sub_title={["플로우 사용자들이 보다 효율적으로 회의할 수 있도록 화상회의 서비스를 지원합니다.", null]}
                         target={target}
      />

      <ProductBusinessBanner />
    </main>

  )

}

export default Video