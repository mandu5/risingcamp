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

function Loading() {
  return (
    <LoadingScreen>
      <Spinner
        color="#000"
        speed="0.75s"
        thickness="50px"

      />
      <h1 className="icon">Loading</h1>
    </LoadingScreen>
  );
}

export default Loading;
