import React from 'react'
import { SecurityListLiProps } from '../types/props'

const SecurityListLi = ({ target, title, sub_title }: SecurityListLiProps) => {

  return (

    <li>
      <i><img src={`./images/security/icon-${target}.png`} alt="" /></i>
      <strong>{ title }</strong>
      <p>
        { sub_title[0] }
        <br className="for-pc" />
        { sub_title[1] }
      </p>
    </li>
    
  )

}

export default SecurityListLi