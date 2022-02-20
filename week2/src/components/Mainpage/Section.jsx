import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { b, c, d, e, f, g, h } from "../../assets/img";

const Sections = styled.section`
  background-color: #fff;
  color: #000;
  padding: 30px 0 20px 0;
  .margin {
    margin: 0 5% 0 5%;
  }
  .title {
    display: flex;
    font-size: 48px;
    margin: 60px 0 30px 15px;
    font-weight: 600;
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 400px;
    .city {
      padding: 20px;
      font-size: 35px;
      font-weight: 600;
      color: #fff;
    }
    .distance {
      padding: 20px;
      font-size: 20px;
      color: #fff;
    }
    .tab1,
    .tab2,
    .tab3,
    .tab4 {
      margin: 10px;
      border-radius: 15px;
    }
    .tab1 {
      background: #de3151;
    }
    .tab2 {
      background: #d93b30;
    }
    .tab3 {
      background: #bc1a6e;
    }
    .tab4 {
      background: #cc2d4a;
    }
    .img1,
    .img2,
    .img3,
    .img4 {
      height: 50%;
      border-radius: 15px;
      margin-bottom: 20px;
    }
    .img1 {
      background: url(${e});
      background-size: cover;
    }
    .img2 {
      background: url(${f});
      background-size: cover;
    }
    .img3 {
      background: url(${g});
      background-size: cover;
    }
    .img4 {
      background: url(${h});
      background-size: cover;
    }
  }
  .experience {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 800px;
    color: #ffffff;
    .tab1,
    .tab2 {
      margin: 10px;
    }
    .subtitle {
      font-size: 35px;
      font-weight: 600;
    }
    .button {
      border: none;
      background-color: #fff;
      color: #000;
      border-radius: 10px;
      font-size: 18px;
      padding: 14px 32px 14px 32px;
      text-decoration: none;
      float: left;
      margin-top: 20px;
      cursor: pointer;
      &:hover {
        background-color: rgb(211, 210, 210);
      }
    }
  }
  .image1 {
    background: url(${b});
    background-size: cover;
  }
  .image2 {
    background: url(${c});
    background-size: cover;
  }
  .image1,
  .image2 {
    border-radius: 15px;
    height: 100%;
    width: 100%;
    padding: 50px;
  }
  .image3 {
    background: url(${d});
    background-size: cover;
    border-radius: 15px;
    height: 630px;
    margin: 70px 10px 50px 10px;
    color: #fff;
    padding: 20px;
    .title {
      font-size: 80px;
      font-weight: 800;
      margin-left: 60px;
    }
    .button {
      border: none;
      background-color: #fff;
      color: #000;
      border-radius: 10px;
      font-size: 18px;
      padding: 14px 32px 14px 32px;
      cursor: pointer;
      margin: 110px 0 0 60px;
      &:hover {
        background-color: rgb(211, 210, 210);
      }
    }
  }
`;

function Section() {
  return (
    <Sections>
      <div className="margin">
        <div>
          <span className="title">설레는 다음 여행을 위한 아이디어</span>
        </div>
        <div className="tabs">
          <div className="tab1">
            <div className="img1"></div>
            <div>
              <span className="city">제주도(Jeju)</span>
              <br />
              <span className="distance">455km 거리</span>
            </div>
          </div>
          <div className="tab2">
            <div className="img2"></div>
            <div>
              <span className="city">부산</span>
              <br />
              <span className="distance">324km 거리</span>
            </div>
          </div>
          <div className="tab3">
            <div className="img3"></div>
            <div>
              <span className="city">강릉시</span>
              <br />
              <span className="distance">166km 거리</span>
            </div>
          </div>
          <div className="tab4">
            <div className="img4"></div>
            <div>
              <span className="city">속초시</span>
              <br />
              <span className="distance">157km 거리</span>
            </div>
          </div>
        </div>
      </div>
      <div className="margin">
        <div>
          <span className="title">에어비앤비 체험 둘러보기</span>
        </div>
        <div className="experience">
          <div className="tab1">
            <div className="image1">
              <span className="subtitle">
                여행 중 만나는
                <br /> 이색적인 즐길 거리
                <br />
              </span>
              <Link to="/experience" className="button">
                체험
              </Link>
            </div>
          </div>
          <div className="tab2">
            <div className="image2">
              <span className="subtitle">
                집에서 만나는
                <br /> 다양한 즐길 거리
                <br />
              </span>
              <button className="button">온라인 체험</button>
            </div>
          </div>
        </div>
      </div>
      <div className="margin">
        <div className="image3">
          <span className="title">
            호스팅에 관해
            <br /> 궁금하신 점이
            <br /> 있나요?
          </span>
          <button className="button">슈퍼호스트에게 물어보세요</button>
        </div>
      </div>
    </Sections>
  );
}

export default Section;
