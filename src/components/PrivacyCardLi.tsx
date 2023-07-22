import React from 'react'
import { CardLiProps } from '../types/props'
import { Link } from 'react-router-dom'

const PrivacyCardLi = ({ number, title, sub_title, isLink, href }: CardLiProps) => {
  return (
    <li>
      <img src={`./images/security/icon-${number}png`} alt='' />
      <h3>{ title }</h3>
      <p>{ sub_title }</p>
      {
        isLink && (<Link to={(typeof(href) === 'string') ? href : ""}>자세히 보기</Link>)
      }
    </li>
  )
}

export default PrivacyCardLi
