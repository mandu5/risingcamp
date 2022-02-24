import styled from "styled-components";
import React from "react";
import { Spinner } from "@chakra-ui/spinner";

const LoadingScreen = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 200px 0 -1050px 0;
  color: #000;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: aquamarine;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

function Loading({ dataRequest }) {
  return (
    <LoadingScreen>
      <Spinner
        color="#000"
        speed="0.75s"
        thickness="100px"
        emptyColor="blanchedalmond"
      />
      <h1 className="icon">Loading</h1>
      <Button onClick={dataRequest}>데이터 즉시 불러오기</Button>
    </LoadingScreen>
  );
}

export default Loading;
