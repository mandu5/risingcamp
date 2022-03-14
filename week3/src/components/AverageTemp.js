import React from "react";
import styled from "styled-components";
import moment from "moment";

const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  .city {
    font-size: 20px;
    color: #fefedf;
  }
  .average {
    text-decoration: underline;
  }
`;
const Result = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 20px;
  color: #fefedf;
`;

function AverageTemp({ presentData, pastData }) {
  const presentAverage =
    Math.ceil(
      presentData
        .map((item) => Number(item.ta))
        .reduce((sum, current) => sum + current / 24) * 100
    ) / 100;
  const pastAverage =
    Math.ceil(
      pastData
        .map((item) => Number(item.ta))
        .reduce((sum, current) => sum + current / 24) * 100
    ) / 100;

  return (
    <>
      <Head>
        <div>
          <p className="city">{presentData[0].stnNm}</p>
          <p>{moment(presentData[0].tm).format("MMMM Do YYYY")}</p>
          <div className="average">
            <span>평균 기온: </span>
            <span>
              {presentAverage}
              ˚C
            </span>
          </div>
        </div>
        <div>
          <p className="city">{pastData[0].stnNm}</p>
          <p>{moment(pastData[0].tm).format("MMMM Do YYYY")}</p>
          <div className="average">
            <span>평균 기온: </span>
            <span>
              {pastAverage}
              ˚C
            </span>
          </div>
        </div>
      </Head>
      <Result>
        {presentAverage > pastAverage
          ? `${presentData[0].stnNm}
             (${moment(presentData[0].tm).format("MMMM Do YYYY")}) 이(가) 
             ${pastData[0].stnNm}
             (${moment(pastData[0].tm).format("MMMM Do YYYY")}) 보다 
             ${Math.ceil(presentAverage - pastAverage)}도 더 높습니다.`
          : `${pastData[0].stnNm}
            (${moment(pastData[0].tm).format("MMMM Do YYYY")}) 이(가) 
            ${presentData[0].stnNm}
            (${moment(presentData[0].tm).format("MMMM Do YYYY")}) 보다 
            ${Math.ceil(pastAverage - presentAverage)}도 더 높습니다.`}
      </Result>
    </>
  );
}

export default AverageTemp;
