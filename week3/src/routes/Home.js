import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import ListData from "../components/ListData";
import Navbar from "../components/Navbar";
import AverageTemp from "../components/AverageTemp";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Home = React.memo(() => {
  const ServiceKey = process.env.REACT_APP_SERVICE_KEY;
  const [presentData, setPresentData] = useState([""]);
  const [pastData, setPastData] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [city, setCity] = useState("108");
  const [cityTwo, setCityTwo] = useState("159");
  // date
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + month + (day - 2);
  const [date, setDate] = useState(dateString);
  const [dateTwo, setDateTwo] = useState(dateString);

  const onClick = () => {
    getPresentWeather();
    getPastWeather();
    setLoading(true);
  };
  
  const getPresentWeather = async () => {
    let queryParams = "?" + encodeURIComponent("ServiceKey") + `=${ServiceKey}`;
    queryParams +=
      "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("json");
    queryParams +=
      "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("24");
    queryParams +=
      "&" + encodeURIComponent("dataCd") + "=" + encodeURIComponent("ASOS");
    queryParams +=
      "&" + encodeURIComponent("dateCd") + "=" + encodeURIComponent("HR");
    queryParams +=
      "&" + encodeURIComponent("startDt") + "=" + encodeURIComponent(`${date}`);
    queryParams +=
      "&" + encodeURIComponent("startHh") + "=" + encodeURIComponent("00");
    queryParams +=
      "&" + encodeURIComponent("endDt") + "=" + encodeURIComponent(`${date}`);
    queryParams +=
      "&" + encodeURIComponent("endHh") + "=" + encodeURIComponent("23");
    queryParams +=
      "&" + encodeURIComponent("stnIds") + "=" + encodeURIComponent(`${city}`);
    let url =
      "https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList" +
      queryParams;

    try {
      const response = await axios({
        method: "get",
        url: url,
      });
      setPresentData(response.data.response.body.items.item);
      setLoading(false);
      setData(true);
    } catch (err) {
      console.log(err);
    }
  };
  const getPastWeather = async () => {
    let queryParams = "?" + encodeURIComponent("ServiceKey") + `=${ServiceKey}`;
    queryParams +=
      "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("json");
    queryParams +=
      "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("24");
    queryParams +=
      "&" + encodeURIComponent("dataCd") + "=" + encodeURIComponent("ASOS");
    queryParams +=
      "&" + encodeURIComponent("dateCd") + "=" + encodeURIComponent("HR");
    queryParams +=
      "&" +
      encodeURIComponent("startDt") +
      "=" +
      encodeURIComponent(`${dateTwo}`);
    queryParams +=
      "&" + encodeURIComponent("startHh") + "=" + encodeURIComponent("00");
    queryParams +=
      "&" +
      encodeURIComponent("endDt") +
      "=" +
      encodeURIComponent(`${dateTwo}`);
    queryParams +=
      "&" + encodeURIComponent("endHh") + "=" + encodeURIComponent("23");
    queryParams +=
      "&" +
      encodeURIComponent("stnIds") +
      "=" +
      encodeURIComponent(`${cityTwo}`);
    let url =
      "https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList" +
      queryParams;

    try {
      const response = await axios({
        method: "get",
        url: url,
      });
      setPastData(response.data.response.body.items.item);
      setLoading(false);
      setData(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar
        setCity={setCity}
        setDate={setDate}
        setCityTwo={setCityTwo}
        setDateTwo={setDateTwo}
        onClick={onClick}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          {data ? (
            <>
              <AverageTemp presentData={presentData} pastData={pastData} />
              <ListData presentData={presentData} pastData={pastData} />
            </>
          ) : (
            <>
              <Title>도시와 날짜를 선택해주세요</Title>
            </>
          )}
        </>
      )}
    </>
  );
});

export default Home;
