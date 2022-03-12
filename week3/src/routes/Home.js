import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import ListData from "../components/ListData";
import Navbar from "../components/Navbar";
import AverageTemp from "../components/AverageTemp";

const Home = React.memo(() => {
  const ServiceKey = process.env.REACT_APP_SERVICE_KEY;
  const [presentData, setPresentData] = useState([""]);
  const [pastData, setPastData] = useState([""]);
  const [city, setCity] = useState("108");
  const [date, setDate] = useState("20120306");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPresentWeather();
    getPastWeather();
    setLoading(true);
  }, [city, date]);
  const getPresentWeather = async () => {
    let queryParams = "?" + encodeURIComponent("ServiceKey") + `=${ServiceKey}`;
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
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
      "https://secret-ocean-49799.herokuapp.com/http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList" +
      queryParams;

    try {
      const response = await axios({
        method: "get",
        url: url,
      });
      setPresentData(response.data.response.body.items.item);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const getPastWeather = async () => {
    let queryParams = "?" + encodeURIComponent("ServiceKey") + `=${ServiceKey}`;
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
    queryParams +=
      "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("24");
    queryParams +=
      "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("json");
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
      "https://secret-ocean-49799.herokuapp.com/http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList" +
      queryParams;

    try {
      const response = await axios({
        method: "get",
        url: url,
      });
      //   console.log(response.data.response.body.items);
      setPastData(response.data.response.body.items.item);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar setCity={setCity} setDate={setDate} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <AverageTemp presentData={presentData} pastData={pastData} />
          <ListData presentData={presentData} pastData={pastData} />
        </>
      )}
    </>
  );
});

export default Home;
