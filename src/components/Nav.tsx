import React from 'react'
import { Link } from 'react-router-dom';
import ProductLnbSubLi from './ProductLnbSubLi';
import { LnbSubLiProps } from '../types/props';

const productLnbSubLis: Array<LnbSubLiProps> = [
  {
    to: '/project',
    src: './images/header/gnb-project.png',
    title: '프로젝트 협업',
    sub_title: ["프로젝트 중심으로 모여 동일 부서가 아니더라도 관련자들과",
                "리얼타임으로 소통이 가능합니다."]
  },
  {
    to: '/task',
    src: './images/header/icon_menu_task.svg',
    title: '업무관리',
    sub_title: ["업무 시작부터 종료까지 단계별 상태로 구분하여 직관적인 워크",
                "플로우 시스템을 제공합니다."]
  },
  {
    to: '/chatting',
    src: './images/header/gnb-msg.png',
    title: '메신저',
    sub_title: ["조직 구성원의 연락처 ∙ 이메일 ∙ 내선번호를 확인 후 보다 빠르고",
                "정확한 업무소통을 할 수 있습니다."]
  },
  {
    to: '/okr',
    src: './images/header/icon_menu_okr.svg',
    title: 'OKR',
    sub_title: ["회사-팀-개인간 목표를 연결해, OKR 목표 관리와 업무를 방향성에",
                "맞춰 몰입 할 수 있습니다."]
  },
  {
    to: '/video',
    src: './images/header/gnb-meet.png',
    title: '화상회의',
    sub_title: ["플로우 사용자들이 보다 효율적으로 회의할 수 있도록 화상회의",
                "서비스를 무료로 제공합니다."]
  },
  {
    to: '/security',
    src: './images/header/gnb-security.png',
    title: '보안기능',
    sub_title: ["최고의 전문 인력이 관리하는 플로우만의 보안체계, 언제라도 대응",
                "할 수 있도록 보안 인력이 상시 대기하고 있습니다."]
  },
  {
    to: '/system',
    src: './images/header/gnb-system.png',
    title: '시스템 연동',
    sub_title: ["구글・드롭박스 등 세계최고 소프트웨어는 물론 우리회사의",
                "그룹웨어・ERP 등 사내시스템과도 연동할 수 있습니다."]
  },
  {
    to: '/download',
    src: './images/header/icon_menu_download.svg',
    title: '다운로드',
    sub_title: ["언제 어디서든 쉽고 빠르게 플로우를 이용해 보세요.", null]
  }
];

const Nav = () => {

  const onSideMenuClick = () => {

    document.getElementById( 'sideMenu' )?.classList.toggle( 'active' );
    document.getElementById('lnbMenu')?.classList.toggle( 'on' );
    document.querySelector('header')?.classList.toggle( 'on' );

  }

  const onLnbMenuClick = ( id:string ) => {

    document.getElementById( id )?.classList.toggle( 'active' );

  }

  return (

    <nav id='lnbWrap'>
      <h1>
        <Link to='/'>
          <img src='./images/logo.svg' alt='flow logo' />
        </Link>
      </h1>

      <ul id="lnbMenu">

        <li id='product' onClick={ () => onLnbMenuClick( 'product' ) }>
          <span>제품<i className='bx bx-chevron-down'></i></span>
          <ul id="lnbSub">
            {
              productLnbSubLis.map(item => (
                <ProductLnbSubLi 
                  key={item.to} 
                  to={item.to}
                  src={item.src}
                  title={item.title}
                  sub_title={item.sub_title}
                />
              ))
            }
          </ul>
        </li>
        <li id='price' onClick={ () => onLnbMenuClick( 'price' ) }>
          <span>요금<i className='bx bx-chevron-down'></i></span>
          <ul id="lnbSub">
            <li><Link to="/price"><strong>요금제</strong></Link></li>
            <li><Link to="/build"><strong>구축형 문의</strong></Link></li>
            <li><Link to="/guest-vs-build"><strong>유료 VS 무료</strong></Link></li>
          </ul>
        </li>
        <li><a href="/">고객사례</a></li>
        <li id='docs' onClick={ () => onLnbMenuClick( 'docs' ) }>
          <span>자료실<i className='bx bx-chevron-down'></i></span>
          <ul id="lnbSub">
            <li><a href="/"><strong>리포트</strong></a></li>
            <li><a href="/"><strong>세미나</strong></a></li>
            <li><a href="/"><strong>플로우 활용</strong></a></li>
            <li><a href="/"><strong>재택근무 활용</strong></a></li>
            <li><a href="/"><strong>사용 매뉴얼</strong></a></li>
          </ul>
        </li>
        <li id='lecture' onClick={ () => onLnbMenuClick( 'lecture' ) }><a href="/">강의실</a></li>
        <li className="lnb-pc"><a href="/">소개서 받기</a></li>
        <li className="lnb-mobile" id='company' onClick={ () => onLnbMenuClick( 'company' ) }>
          <span>회사소개<i className='bx bx-chevron-down'></i></span>
          <ul id="lnbSub">
            <li><a href="/"><strong>스토리</strong></a></li>
            <li><a href="/"><strong>문화복지</strong></a></li>
            <li><a href="/"><strong>멤버소개</strong></a></li>
            <li><a href="/"><strong>채용</strong></a></li>
          </ul>
        </li>
        <li className="lnb-mobile" id='partner' onClick={ () => onLnbMenuClick( 'partner' ) }>
          <span>파트너<i className='bx bx-chevron-down'></i></span>
          <ul id="lnbSub">
            <li><a href="/"><strong>파트너 소개</strong></a></li>
            <li><a href="/"><strong>파트너 모집</strong></a></li>
          </ul>
        </li>
        <li className="lnb-mobile"><a href="/">소개 및 비교자료</a></li>
        <li className="lnb-mobile footer">
          <a href="/">회원가입</a>
          <i></i>
          <a href="/">도입문의</a>
        </li>
      </ul>

      <ul id="lnbLogin">
        <li><a href="/">로그인</a></li>
        <li><button>무료 회원가입</button></li>
      </ul>

      <ul id="lnbSide">
        <li><button>무료시작</button></li>
        <li><div id="sideMenu" onClick={onSideMenuClick}>
          <div className="center">
            <div className="bar bar01"></div>
            <div className="bar bar02"></div>
            <div className="bar bar03"></div>
          </div>
        </div></li>

      </ul>

    </nav>

  )
}

export default Nav