import React from 'react'
import ManagementList from './ManagementList';

const managementItems = [
  {
    id: 0,
    title: "프로젝트",
    href: "#"
  },
  {
    id: 1,
    title: "작업관리",
    href: "#"
  },
  {
    id: 2,
    title: "간트차트",
    href: "#"
  },
  {
    id: 3,
    title: "OKR",
    href: "#"
  },
  {
    id: 4,
    title: "메신저",
    href: "#"
  },
  {
    id: 5,
    title: "화상회의",
    href: "#"
  },
  {
    id: 6,
    title: "파일함",
    href: "#"
  },
  {
    id: 7,
    title: "캘린더",
    href: "#"
  },
  {
    id: 8,
    title: "외부인 초대",
    href: "#"
  }
];

const Management = () => {
  return (
    <section className="container__management">
      <div className="container__inner">
        <h2>
          프로젝트 관리를 위한
          <br />
          모든 기능을 담았습니다.
        </h2>
      </div>
      <div className="flowWrap">
        <ul>
          { 
            managementItems && managementItems.map( ( item ) => (
              <ManagementList key={ item.id } item={ item } />
            ) )
          }
          {
            managementItems && managementItems.map( ( item ) => (
              <ManagementList key={ item.id } item={ item } />
            ) )
          }
        </ul>
      </div>
    </section>
  )
}

export default Management