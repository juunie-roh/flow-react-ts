import React from 'react'
import { ProductInnerLayout } from '../../layouts'

import './ProductBusinessBanner.css'

const ProductBusinessBanner = () => {
  return (

    <section className="container__p_businessBanner">
      <div className="cover">
        <ProductInnerLayout>

          <div className="text">
            <div className="flow-symbols">
              <i/>
              <i/>
              <i/>
              <i/>
              <i/>
            </div>
            <p className="text-subtitle">
              메신저・프로젝트 소통・워크플로우
              <br />
              화상회의까지 ㅡ
              <br />
              이 모든 기능을 플로우로 체험해보세요.
            </p>
            <a href="/">
              무료체험 시작하기
              <i className='bx bxs-chevron-right'></i>
            </a>
          </div>

        </ProductInnerLayout>
      </div>
    </section>

  )

}

export default ProductBusinessBanner