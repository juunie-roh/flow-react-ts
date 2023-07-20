import React from 'react'
import { ManagementItem } from '../types/props';
import { Link } from 'react-router-dom';

const ManagementList = ( props: { item: ManagementItem } ) => {
  const { href, title } = props.item;
  return (
    <li><Link to={href}>
      <i></i>
      <span>{ title }</span>
    </Link></li>
  )
}

export default ManagementList