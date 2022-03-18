import moment from "moment";
import React from "react";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const Head = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function Chart({ presentData, pastData }) {
  return (
    <Head>
      <ApexChart
        type="line"
        series={[
          {
            name: "temperature",
            data: presentData.map((item) => item.ta),
          },
        ]}
        options={{
          chart: {
            height: 300,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },
          stroke: {
            curve: "straight",
          },
          xaxis: {
            categories: presentData.map((item) =>
              moment(item.tm).format("h:mm a")
            ),
          },
        }}
      />
      <ApexChart
        type="line"
        series={[
          {
            name: "temperature",
            data: pastData.map((item) => item.ta),
          },
        ]}
        options={{
          chart: {
            height: 300,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },
          stroke: {
            curve: "straight",
          },
          xaxis: {
            categories: pastData.map((item) =>
              moment(item.tm).format("h:mm a")
            ),
          },
        }}
      />
    </Head>
  );
}

export default Chart;
