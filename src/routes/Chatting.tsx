import React from 'react'

import { ProductBusinessBanner, ProductMainBanner } from '../containers/sections'

import '../styles/common.css'

const Chatting = () => {

  const target = 'chatting';

  return (

    <main>
      <ProductMainBanner title={["조직도로 연결된", "편리한 메신저"]}
                         sub_title={["조직 구성원의 연락처・이메일・내선번호를 확인 후 보다", "빠르고 정확한 업무 소통을 할 수 있습니다."]}
                         target={target}
      />

      <ProductBusinessBanner />
    </main>

  )

}

export default Chatting