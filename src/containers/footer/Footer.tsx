import React from 'react'
import { Link } from 'react-router-dom'
import { InnerLayout } from '../../layouts'
import './Footer.css'

const Footer = () => {
  return (

    <footer>

      <InnerLayout>
        <div className="company_info">
          <ul className="brochure">
            <li><a href="#">
              소개 및 비교자료
              <i className='bx bxs-chevron-right'></i>
            </a></li>
            <li><a href="#">
              도입문의
              <i className='bx bxs-chevron-right'></i>
            </a></li>
            <li><a href="#">
              플로우 블로그
              <i className='bx bxs-chevron-right'></i>
            </a></li>
          </ul>
          <ul className="address">
            <li><p>
              <b>주소</b>
              서울특별시 영등포구 영신로 220 KnK디지털타워 1410호
            </p></li>
            <li>
              <p>
                <b>마드라스체크㈜대표자</b>
                이학준
              </p>
              <p>
                <b>전화</b>
                1522-9298
              </p>
              <p>
                <b>이메일</b>
                support@flow.team
              </p>
            </li>
            <li>
              <p>
                <b>통신판매업신고번호</b>
                제2019-서울영등포-0298호
              </p>
              <p>
                <b>사업자등록번호</b>
                189-87-00172
              </p>
            </li>
          </ul>
          <ul className="social">
            <li><a href="#" className="yt"></a></li>
            <li><a href="#" className="fb"></a></li>
            <li><a href="#" className="ins"></a></li>
            <li><a href="#" className="flw"></a></li>
          </ul>
          <ul className="terms">
            <li><a href="#">이용약관</a></li>
            <li><a href="#"><b>개인정보 처리방침</b></a></li>
            <li className="copyright">&copy; 2021 Madras check All rights Reserved.</li>
          </ul>
        </div>
        <div className="footer_menu">
          <ul className="siteMap menu">
            <li>
              <ol>
                <li><b>회사소개</b></li>
                <li><a href="#">스토리</a></li>
                <li><a href="#">문화복지</a></li>
                <li><a href="#">멤버소개</a></li>
                <li><a href="#">채용</a></li>
              </ol>
            </li>
            <li>
              <ol>
                <li><b>제품</b></li>
                <li><Link to={"/project"} >프로젝트 협업</Link></li>
                <li><a href="./pages/task.html">업무관리</a></li>
                <li><a href="./pages/chatting.html">메신저</a></li>
                <li><a href="./pages/okr-introduction.html">OKR</a></li>
                <li><a href="./pages/video.html">화상회의</a></li>
                <li><a href="./pages/security.html">보안기능</a></li>
                <li><a href="#">시스템 연동</a></li>
                <li><a href="#">다운로드</a></li>
              </ol>
            </li>
            <li>
              <ol>
                <li><b>요금</b></li>
                <li><a href="#">요금제</a></li>
                <li><a href="#">구축형 문의</a></li>
                <li><a href="#">유료 VS 무료</a></li>
              </ol>
            </li>
            <li>
              <ol>
                <li><b>자료실</b></li>
                <li><a href="#">리포트</a></li>
                <li><a href="#">세미나</a></li>
                <li><a href="#">플로우 활용</a></li>
                <li><a href="#">재택근무 활용</a></li>
                <li><a href="#">사용 매뉴얼</a></li>
              </ol>
            </li>
            <li>
              <ol>
                <li><b>파트너</b></li>
                <li><a href="#">파트너 소개</a></li>
                <li><a href="#">파트너 모집</a></li>
              </ol>
            </li>
          </ul>
        </div>
      </InnerLayout>

    </footer>

  )
}

export default Footer