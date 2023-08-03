import React, { useState } from 'react'
import { InnerLayout } from '../../layouts';
import './Functions.css'

const slideLis = document.querySelectorAll( '#slideList li' );
const currentNum = document.getElementById("currentNum");
const nextNum = document.getElementById("nextNum");
const container: HTMLElement | null = document.querySelector(".container__functions");
const progressbar: HTMLElement | null = document.querySelector(".slideFunc i.progressbar");

const SLIDER_DELAY = 5000;

const bgUrls = [
  '../../../public/images/main/main-function1.png',
  '../../../public/images/main/main-function2.png',
  '../../../public/images/main/main-function3.png',
  '../../../public/images/main/main-function4.png',
  '../../../public/images/main/main-function5.png'
];
const Functions = () => {

  const [currentLi, setCurrentLi] = useState<Element>(slideLis[0]);
  let sliderInterval;
  
  const activateLi = (li: Element) => {
    
    const currentIndex = Array.prototype.indexOf.call(slideLis, li);
    currentNum && ( currentNum.innerHTML = (currentIndex + 1).toString() );
    nextNum && ( nextNum.innerHTML = (currentIndex === slideLis.length - 1) ? "1" : (currentIndex + 2).toString() );
    li.classList.add('active');
    progressbar?.classList.add('active');
    setCurrentLi(li);

  }

  const onClickLi = (e: React.MouseEvent) => {
    
    e.preventDefault();
    currentLi?.classList.remove('active');
    progressbar?.classList.remove("active");
    void progressbar?.offsetWidth; // this is for replaying the animation of progressbar
    activateLi(e.currentTarget);

  }

  

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
              <li className="active" onClick={onClickLi}>프로젝트</li>
              <li onClick={onClickLi}>업무관리</li>
              <li onClick={onClickLi}>간트차트</li>
              <li onClick={onClickLi}>보안메신저</li>
              <li onClick={onClickLi}>OKR</li>
            </ul>
          </div>
          <p>
            메일, 채팅, 문서 중심의 방식에서 벗어나
            <br />
            온라인 협업 방식으로 프로젝트 소통을 강화할 수 있습니다.
          </p>
          <div className="slideProgress">
            <p id="currentNum">1</p>
            <i className="progressbar active"></i>
            <p id="nextNum">2</p>
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