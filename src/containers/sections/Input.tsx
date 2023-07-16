import React, { useState } from 'react'
import InnerLayout from '../../layouts/InnerLayout';

const formDatas = new Array<FormData>();

const Input = () => {
  const inputs = document.querySelectorAll( 'input' );
  const selects = document.querySelectorAll( 'select' );

  const [ privacyChecked, setPrivacyChecked ] = useState( false );
  const [ marketingChecked, setMarketingChecked ] = useState( false );

  const onClickSubmit = ( e: any ) => {

    e.preventDefault();
    const data = new FormData();

    inputs.forEach( ( input ) => {
      if ( input.type === 'checkbox' || input.type === 'submit' ) return;
      if ( !input.value ) { alert( `${input.placeholder}을(를) 입력해주세요.`); return; }
      data.append( input.id, input.value );
    } )

    selects.forEach( ( select ) => {
      if ( select.value === "" ) { alert( `${select.querySelector( 'option' )?.innerText}` ); return; }
      data.append( select.id, select.value );
    } )

    if ( !privacyChecked ) { alert("개인정보 활용에 동의를 하셔야합니다."); return; }
    if ( !marketingChecked ) { alert( "마케팅 수집 이용에 동의하셔야 합니다." ); return; }

    data.forEach( ( item ) => {
      console.log( item );
    } )

    formDatas.push( data );
    console.log( formDatas );

  }

  return (

    <section className="container__input">
      <InnerLayout>
        <div>
          <h2>
            간단한 정보를 기입하고
            <br />
            소개서를 다운로드하세요!
          </h2>
          <p className="miniText">협업툴을 도입하기 전 플로우 소개서와 비교 자료로 장단점을 한눈에 확인하세요!</p>
          <img src="./images/flow/flow-guide.png" alt="" />
        </div>
        <form id="consultForm">
          <ul className="formList">
            <li>
              <label htmlFor="companyName">회사명</label>
              <input type="text" id="companyName" placeholder="회사명" name='companyName' required autoComplete="off" />
            </li>
            <li>
              <label htmlFor="userName">이름</label>
              <input type="text" id="userName" placeholder="이름" name='userName' required autoComplete="off" />
            </li>
            <li>
              <label htmlFor="tel">전화번호</label>
              <input type="tel" id="tel" placeholder="전화번호(-제외)" name='tel' required autoComplete="off" />
            </li>
            <li>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="이메일" name='email' required autoComplete="off" />
            </li>
            <li>
              <select id="requiredNum" required>
                <option value="">예상 사용 인원을 선택하세요</option>
                <option value="10">10인 이하</option>
                <option value="11">11인 이상 30인 이하</option>
                <option value="31">31인 이상 50인 이하</option>
                <option value="51">51인 이상 100인 미만</option>
                <option value="100">100인 이상</option>
                <option value="500">500인 이상</option>
                <option value="1000">1000인 이상</option>
              </select>
            </li>
            <li>
              <select id="sector" required>
                <option value="">업종을 선택하세요</option>
                <option value="Produce">제조업</option>
                <option value="IT">정보통신업(IT)</option>
                <option value="Franchise">F&B, 프랜차이즈</option>
                <option value="Logistics">도·소매 유통 판매</option>
                <option value="Entertain">엔터테인먼트, 여행, 예술</option>
                <option value="Public">공공 행정</option>
                <option value="Construct">건설 및 기간 산업</option>
                <option value="Tax">세무, 법무, 노무</option>
                <option value="Transportation">운수 및 물류</option>
                <option value="Medical">의료 보건, 사회 복지</option>
                <option value="Finance">금융, 보험, 부동산</option>
                <option value="Association">협회 및 단체</option>
                <option value="Research">교육 및 연구</option>
                <option value="Agriculture">1차 산업(농·임·수산업)</option>
                <option value="etc">기타</option>
              </select>
            </li>
          </ul>
          <ul className="agreeList">
            <li>
              <input type="checkbox" id="privacyAgree" required name='privacyAgree' />
              <label htmlFor="privacyAgree" id="privacyAgreeLabel" onClick={ () => { setPrivacyChecked( !privacyChecked ) } } className={ privacyChecked ? "checked" : "" }>
                <span>[필수]</span>
                <a href="">개인정보 수집 및 이용</a>에 동의합니다.
              </label>
            </li>
            <li>
              <input type="checkbox" id="marketingAgree" required name='marketingAgree'/>
              <label htmlFor="marketingAgree" id="marketingAgreeLabel" onClick={ () => { setMarketingChecked( !marketingChecked ) } } className={ marketingChecked ? "checked" : "" }>
                <span>[필수]</span>
                <a href="">홍보 및 마케팅 수집·이용</a>에 동의합니다.
              </label>
            </li>
          </ul>
          <input type="submit" id="submitBtn" value="신청하기" onClick={ onClickSubmit } />
          {/* <button type='button' id='submitBtn' onClick={ onClickSubmit }>신청하기</button> */}
        </form>
      </InnerLayout>
    </section>

  )
}

export default Input