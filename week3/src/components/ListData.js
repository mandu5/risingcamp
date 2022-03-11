import React from "react";

function ListData({ presentData, pastData }) {
  return (
    <>
      <ul>
        {presentData.map((date, index) => {
          return (
            <li key={index}>
              {date.tm}
              {date.stnNm}
              {date.ta + "˚C"}
            </li>
          );
        })}
      </ul>
      <ul>
        {pastData.map((date, index) => {
          return (
            <li key={index}>
              {date.tm}
              {date.stnNm}
              {date.ta + "˚C"}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListData;
