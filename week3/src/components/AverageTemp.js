import React from "react";
import styled from "styled-components";

const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); ;
`;
function AverageTemp({ presentData, pastData }) {
  return (
    <Head>
      <div>
        <p>평균 기온(현재):</p>
        {presentData
          .map((item) => Number(item.ta))
          .reduce((sum, current) => sum + current / 24)}
      </div>
      <div>
        <p>평균 기온(과거):</p>
        {pastData
          .map((item) => Number(item.ta))
          .reduce((sum, current) => sum + current / 24)}
      </div>
    </Head>
  );
}

export default AverageTemp;
