import React from 'react'
import { Link } from 'react-router-dom'
import { LnbSubLiProps } from '../types/props'

const ProductLnbSubLi = ({ to, src, title, sub_title }: LnbSubLiProps) => {
  return (
    <li>
      <Link to={to}>
        <strong><img src={src} alt="" />{ title }</strong>
        <p>
          { sub_title[0] }
          {
            (sub_title[1]) && (<><br />{ sub_title[1] }</>)
          }
        </p>
      </Link>
    </li>
  )
}

export default ProductLnbSubLi