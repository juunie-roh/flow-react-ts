import React from 'react'
import { CardLiProps } from '../types/props'
import { Link } from 'react-router-dom'

const CertificationCardLi = ({ number, title, sub_title, isLink, href }: CardLiProps) => {
  return (
    <li>
      <img src={'./images/security/certificate-' + number + '.png'} alt='' />
      <h3>{ title }</h3>
      <p>{ sub_title }</p>
      {
        isLink && (<Link to={(typeof(href) === 'string') ? href : ""}>인증서 확인하기</Link>)
      }
    </li>
  )
}

export default CertificationCardLi