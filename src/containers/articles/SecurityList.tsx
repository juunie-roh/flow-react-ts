import React from 'react'
import { ProductInnerLayout } from '../../layouts'

import './SecurityList.css'
import { SecurityListLiProps } from '../../types/props'
import SecurityListLi from '../../components/SecurityListLi'

const SecurityList = () => {

  const SecurityListLis: Array<SecurityListLiProps> = [
    {
      target: "network",
      title: "네트워크 보안",
      sub_title: ["외부의 서버 접근, 호스트 및 아이디", "내부 DB 접근이 철저하게 제한됩니다."]
    },
    {
      target: "data",
      title: "데이터 암호화",
      sub_title: ["모든 데이터는 암호화된 상태로 안전하게", "저장됩니다."]
    },
    {
      target: "security",
      title: "보안사고 상시 대응",
      sub_title: ["플로우팀 보안인력이 언제라도 대응 할 수", "있도록 대기하고 있습니다."]
    }
  ]

  return (
    <section className='security-list'>
      <ProductInnerLayout>
        <div className='contents-wrap'>
          <ul>
            { 
              SecurityListLis.map((li: SecurityListLiProps) => (
                <SecurityListLi 
                  key={li.target}
                  target={li.target}
                  title={li.title}
                  sub_title={li.sub_title}
                />
              ))
            }
          </ul>
        </div>
      </ProductInnerLayout>
    </section>
  )
}

export default SecurityList