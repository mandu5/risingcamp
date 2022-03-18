import React from "react";
import styled from "styled-components";
import Chart from "./Chart";

const Lists = styled.div`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    li {
      padding: 5px 10px;
      background-color: #a29fdd;
      .temperature {
        color: red;
        margin: 0 0 0 15px;
      }
    }
  }
`;

function ListData({ presentData, pastData }) {
  return (
    <Lists>
      <Chart presentData={presentData} pastData={pastData}/>
    </Lists>
  );
}

export default ListData;
