import React from 'react'
import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'

import '../styles/common.css'

const Okr = () => {

  const target = 'okr';

  return (

    <main>
      <ProductMainBanner title={["OKR 목표관리와", "업무를 한번에"]}
                         sub_title={["가장 중요한 목표와 핵심 업무에 100% 집중하세요.", null]}
                         target={target}
      />

      <ProductBusinessBanner />
    </main>

  )

}

export default Okr