import React from "react";
import styled from "styled-components";

const Lists = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);;
`;

function ListData({ presentData, pastData }) {
  return (
    <Lists>
      <ul>
        {presentData.map((item, index) => {
          return (
            <li key={index}>
              {item.tm}
              {item.stnNm}
              {item.ta + "˚C"}
            </li>
          );
        })}
      </ul>
      <ul>
        {pastData.map((item, index) => {
          return (
            <li key={index}>
              {item.tm}
              {item.stnNm}
              {item.ta + "˚C"}
            </li>
          );
        })}
      </ul>
    </Lists>
  );
}

export default ListData;
