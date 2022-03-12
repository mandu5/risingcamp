import React from "react";

function AverageTemp({ presentData, pastData }) {
  return (
    <>
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
    </>
  );
}

export default AverageTemp;
