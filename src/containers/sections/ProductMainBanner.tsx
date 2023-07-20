import React from 'react'
import { ProductInnerLayout } from '../../layouts'
import { ProductMainBannerProps } from '../../types/props'

import './ProductMainBanner.css'

const ProductMainBanner = ( props: ProductMainBannerProps ) => {

  return (

    <section className='container__p_banner'>
      <ProductInnerLayout>

        <div className="text-wrap">
          <h2 className="text-title">
            {
              ( props.title[1] ) ?
              ( 
                <>
                  {props.title[0]}
                  <br />
                  {props.title[1]}
                </> 
              ) :
              ( <>{props.title[0]}</> )
            }
          </h2>
          <p className="text-sub-title">
            {
              ( props.sub_title[1] ) ?
              ( 
                <>
                  {props.sub_title[0]}
                  <br />
                  {props.sub_title[1]}
                </> 
              ) :
              ( <>{props.sub_title[0]}</> )
            }
          </p>
          <a href="#">무료로 시작하기<i className='bx bx-chevron-right' style={{ color: "#ffffff" }}></i></a>
        </div>
        <div className="img-wrap">
          <img src={"../images/" + props.target + "/content-0.png"} alt={props.target + "\sBanner Image"} />
        </div>

      </ProductInnerLayout>
    </section>

  )

}

export default ProductMainBanner