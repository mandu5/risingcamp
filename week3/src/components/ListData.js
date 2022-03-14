import React from "react";
import styled from "styled-components";
import moment from "moment";

const Lists = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
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
      <ul>
        {presentData.map((item, index) => {
          return (
            <li key={index}>
              <span>{moment(item.tm).format("h:mm a")}</span>
              <span className="temperature">{item.ta + "˚C"}</span>
            </li>
          );
        })}
      </ul>
      <ul>
        {pastData.map((item, index) => {
          return (
            <li key={index}>
              <span>{moment(item.tm).format(" h:mm a")}</span>
              <span className="temperature">{item.ta + "˚C"}</span>
            </li>
          );
        })}
      </ul>
    </Lists>
  );
}

export default ListData;
