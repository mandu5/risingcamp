import React from "react";
import { ImInstagram, ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiOutlineGlobal } from "react-icons/ai";
import naverBlog from "../../assets/img/naverblog.jpg";
import naverPost from "../../assets/img/naverpost.jpg";
import styled from "styled-components";

const Footers = styled.div`
  background-color: #f7f7f7;
  color: #000;
  padding-top: 50px;
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid rgb(224, 221, 221);
    margin: 0 6% 30px 6%;
    padding-bottom: 30px;
    @media (max-width: 991px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 611px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    ul {
      list-style: none;
      li {
        margin: 15px 0 15px 0;
        font-size: 15px;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
  .copyright {
    margin: 0 6% 0 6%;
    padding-bottom: 30px;
    .left {
      font-weight: 400;
      font-size: 14px;
      cursor: pointer;
    }
    .right {
      float: right;
    }
    .underline {
      text-decoration: underline;
      margin-left: 5px;
      cursor: pointer;
    }
    .underline,
    .fa fa-facebook,
    .fa fa-twitter,
    .fa fa-instagram {
      text-decoration: underline;
      margin-right: 50px;
    }
    .icon {
      margin: 0 10px 0 10px;
      cursor: pointer;
    }
  }
`;

function Footer() {
  return (
    <Footers>
      <div className="tabs">
        <div className="tab1">
          <h4>에어비앤비 지원</h4>
          <ul>
            <li>도움말 센터</li>
            <li>안전 정보</li>
            <li>예약 취소 옵션</li>
            <li>에어비앤비의 코로나19 대응 방안</li>
            <li>장애인 지원</li>
            <li>이웃 민원 신고</li>
          </ul>
        </div>
        <div className="tab2">
          <h4>커뮤니티</h4>
          <ul>
            <li>Airbnb.org: 재난 구호 숙소</li>
            <li>아프간 난민 지원</li>
            <li>차별 철폐를 위한 노력</li>
          </ul>
        </div>
        <div className="tab3">
          <h4>호스팅</h4>
          <ul>
            <li>호스팅 시작하기</li>
            <li>에어커버: 호스트를 위한 보호 프로그램</li>
            <li>호스팅 자료 둘러보기</li>
            <li>커뮤니티 포럼 방문하기</li>
            <li>책임감 있는 호스팅</li>
          </ul>
        </div>
        <div className="tab4">
          <h4>소개</h4>
          <ul>
            <li>뉴스룸</li>
            <li>새로운 기능에 대해 알아보기</li>
            <li>에어비앤비 공동창업자의 메세지</li>
            <li>채용정보</li>
            <li>투자자 정보</li>
            <li>에어비앤비 Luxe</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span className="left">
          © 2022 Airbnb,Inc. · 개인정보 처리방침 · 이용양관 · 사이트맵 · 한국의
          변경된 환불 정책 · 회사 세부정보
        </span>
        <span className="right">
          <AiOutlineGlobal />
          <span className="underline">한국어 (KR)</span>₩
          <span className="underline">KRW</span>
          <ImFacebook className="icon" />
          <AiOutlineTwitter className="icon" />
          <ImInstagram className="icon" />
          <img
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            src={naverBlog}
            alt="naverblog"
            className="icon"
          ></img>
          <img
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            src={naverPost}
            alt="naverpost"
            className="icon"
          ></img>
        </span>
      </div>
    </Footers>
  );
}

export default Footer;
