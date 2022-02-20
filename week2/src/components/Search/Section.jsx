import React from "react";
import styled from "styled-components";
import { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P } from "../../assets/img";
import { data } from "./data";

const Sections = styled.section`
  background-color: #fff;
  color: #000;
  padding-top: 30px;
  padding-bottom: 20px;
  margin-top: 150px;
  .margin {
    margin-right: 5%;
    margin-left: 5%;
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 380px;
    .city {
      font-size: 15px;
      font-weight: 600;
      .right {
        float: right;
      }
    }
    .distance {
      font-size: 15px;
      .right {
        float: right;
      }
    }
    .tab1,
    .tab2,
    .tab3,
    .tab4 {
      margin: 10px;
      border-radius: 15px;
      cursor: pointer;
    }
    .img1,
    .img2,
    .img3,
    .img4,
    .img5,
    .img6,
    .img7,
    .img8,
    .img9,
    .img10,
    .img11,
    .img12,
    .img13,
    .img14,
    .img15,
    .img16 {
      height: 304px;
      border-radius: 15px;
      margin-bottom: 20px;
    }
    .img1 {
      background: url(${A});
      background-size: cover;
    }
    .img2 {
      background: url(${B});
      background-size: cover;
    }
    .img3 {
      background: url(${C});
      background-size: cover;
    }
    .img4 {
      background: url(${D});
      background-size: cover;
    }
    .img5 {
      background: url(${E});
      background-size: cover;
    }
    .img6 {
      background: url(${F});
      background-size: cover;
    }
    .img7 {
      background: url(${G});
      background-size: cover;
    }
    .img8 {
      background: url(${H});
      background-size: cover;
    }
    .img9 {
      background: url(${I});
      background-size: cover;
    }
    .img10 {
      background: url(${J});
      background-size: cover;
    }
    .img11 {
      background: url(${K});
      background-size: cover;
    }
    .img12 {
      background: url(${L});
      background-size: cover;
    }
    .img13 {
      background: url(${M});
      background-size: cover;
    }
    .img14 {
      background: url(${N});
      background-size: cover;
    }
    .img15 {
      background: url(${O});
      background-size: cover;
    }
    .img16 {
      background: url(${P});
      background-size: cover;
    }
  }
`;

function Section() {
  return (
    <Sections>
      <div className="margin">
        <div className="tabs">
          {data.map((item) => (
            <div key={item.image}>
              <div className="tab1">
                <div className={item.image}></div>
                <span className="city">
                  {item.city}
                  <span className="right">{item.price} / 박</span>
                </span>
                <br />
                <span className="distance">
                  {item.distance}
                  <span className="right">{item.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sections>
  );
}

export default Section;
