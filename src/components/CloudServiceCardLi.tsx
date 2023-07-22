import React from 'react'
import { CardLiProps } from '../types/props'

const CloudServiceCardLi = ({ title, sub_title }: CardLiProps) => {
  return (
    <li>
      <img src={'./images/security/check.svg'} alt='' />
      <div className="text">
        <h3>{ title }</h3>
        <p>{ sub_title }</p>
      </div>
    </li>
  )
}

export default CloudServiceCardLi