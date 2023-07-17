import React, { useState } from 'react'
import { InnerLayout } from '../../layouts';
import './Functions.css'

const bgUrls = [
  'url(../../public/images/main/main-function1.png)',
  'url(../../public/images/main/main-function2.png)',
  'url(../../public/images/main/main-function3.png)',
  'url(../../public/images/main/main-function4.png)',
  'url(../../public/images/main/main-function5.png)'
];

const Functions = () => {

  const slideList = document.querySelectorAll( '#slideList li' );
  const slideNum1 = document.getElementById("slideNum1");
  const slideNum2 = document.getElementById("slideNum2");
  const containerFunctions: HTMLElement | null = document.querySelector(".container__functions");
  const progressbar: HTMLElement | null = document.querySelector(".slideFunc i.progressbar");

  const [nextList, setNextList] = useState<Element | null>();
  const [bgUrl, setBgUrl] = useState<string>(bgUrls[0]);

  const slideTimerHandler = () => {

    const currentList = document.querySelector("#slideList li.active");
    progressbar?.classList.remove( 'active' );
  
    if ( currentList === slideList[ slideList.length - 1 ] ) {
      setNextList(slideList[0]);
    } else {
      setNextList(currentList?.nextElementSibling);
    }
  
    currentList?.classList.remove('active');
    nextList?.classList.add('active');
  
    if (slideNum1?.innerText === '5' && slideNum2) {
      slideNum1.innerText = '1';
      slideNum2.innerText = ( parseInt( slideNum2.innerText ) + 1 ).toString();
    } else if ( slideNum1?.innerText === '4' && slideNum2) {
      slideNum1.innerText = ( parseInt( slideNum1.innerText ) + 1 ).toString();
      slideNum2.innerText = '1';
    } else {
      if ( slideNum1 && slideNum2 ) {
        slideNum1.innerText = ( parseInt( slideNum1.innerText ) + 1 ).toString();
        slideNum2.innerText = ( parseInt( slideNum2.innerText ) + 1 ).toString();
      }
    }
  
    if (containerFunctions && slideNum1) {
      setBgUrl(bgUrls[ parseInt(slideNum1.innerText) - 1 ]);
      containerFunctions.style.backgroundImage = bgUrl;
    }

    progressbar?.classList.add( 'active' );

  }

  let slideTimer = setInterval( slideTimerHandler, 5000 );

  return (

    <section className="container__functions">

      <InnerLayout>
        <h2>
          가장 많이 쓰는
          <br />
          TOP5 기능
        </h2>

        <div className="slideFunc">
          <div className="list-wrap">
            <ul id="slideList">
              <li className="active">프로젝트</li>
              <li>업무관리</li>
              <li>간트차트</li>
              <li>보안메신저</li>
              <li>OKR</li>
            </ul>
          </div>
          <p>
            메일, 채팅, 문서 중심의 방식에서 벗어나
            <br />
            온라인 협업 방식으로 프로젝트 소통을 강화할 수 있습니다.
          </p>
          <div className="slideProgress">
            <p id="slideNum1">1</p>
            <i className="progressbar active"></i>
            <p id="slideNum2">2</p>
          </div>
          <a href="#" className="activeLink">
            <i></i>
            기능 살펴보기
          </a>
        </div>
        <img src="./images/gradient-box.png" alt="" />

      </InnerLayout>

    </section>

  )

}

export default Functions