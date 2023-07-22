import React from 'react'
import { ArticleProps } from '../../types/props'
import { ProductInnerLayout } from '../../layouts'

import './Article.css'

const Article = (props: ArticleProps) => {

  return (

    <article className={"content-" + props.number as string}>
      <ProductInnerLayout>

        <div className='contents-wrap'>

          <div className='img-wrap'>
            <img src={`./images/${props.target}/content-${props.number}.png`} alt=''/>
          </div>
          <div className='text-wrap'>
            <h2 className='text-title'>
              {
                (
                  <>
                  { props.title[0] }
                  { props.title[1] && (<><br />{ props.title[1] }</>) }
                  </>
                )
              }
            </h2>
            <p className='text-content'>
              { props.sub_title }
            </p>
          </div>

        </div>

      </ProductInnerLayout>
    </article>

  )

}

export default Article