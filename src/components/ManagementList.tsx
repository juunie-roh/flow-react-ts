import React from 'react'
import { ManagementItem } from '../types/props';

const ManagementList = ( props: { item: ManagementItem } ) => {
  const { href, title } = props.item;
  return (
    <li><a href={ href }>
      <i></i>
      <span>{ title }</span>
    </a></li>
  )
}

export default ManagementList