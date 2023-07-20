import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'

import '../styles/common.css'

const Task = () => {

  const target = 'task';

  return (

    <main>
      <ProductMainBanner title={["직관적 워크플로우", "효율적 업무관리"]}
                         sub_title={["업무 시작부터 종료까지 5단계 상태로 구분하여 직관적인 워크", "플로우 시스템을 제공합니다."]}
                         target={target}
      />

      <ProductBusinessBanner />
    </main>

  )

}

export default Task