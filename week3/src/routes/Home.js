import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Option from "../components/Option";
import ListData from "../components/ListData";
import Navbar from "../components/Navbar";

const Home = React.memo(() => {
  const ServiceKey = process.env.REACT_APP_SERVICE_KEY;
  const [presentData, setPresentData] = useState([""]);
  const [pastData, setPastData] = useState([]);
  const [select, setSelect] = useState("108");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPresentWeather();
    getPastWeather();
    setLoading(true);
  }, [select]);
  const getPresentWeather = async () => {
    let queryParams =
      "?" + encodeURIComponent("ServiceKey") + "=" + `${ServiceKey}`;
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
      "&" +
      encodeURIComponent("startDt") +
      "=" +
      encodeURIComponent("20220305");
    queryParams +=
      "&" + encodeURIComponent("startHh") + "=" + encodeURIComponent("00");
    queryParams +=
      "&" + encodeURIComponent("endDt") + "=" + encodeURIComponent("20220306");
    queryParams +=
      "&" + encodeURIComponent("endHh") + "=" + encodeURIComponent("01");
    queryParams +=
      "&" +
      encodeURIComponent("stnIds") +
      "=" +
      encodeURIComponent(`${select}`);
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
    let queryParams =
      "?" + encodeURIComponent("ServiceKey") + "=" + `${ServiceKey}`;
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
      "&" +
      encodeURIComponent("startDt") +
      "=" +
      encodeURIComponent("20120305");
    queryParams +=
      "&" + encodeURIComponent("startHh") + "=" + encodeURIComponent("00");
    queryParams +=
      "&" + encodeURIComponent("endDt") + "=" + encodeURIComponent("20120306");
    queryParams +=
      "&" + encodeURIComponent("endHh") + "=" + encodeURIComponent("01");
    queryParams +=
      "&" +
      encodeURIComponent("stnIds") +
      "=" +
      encodeURIComponent(`${select}`);
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
      <Navbar />
      <Option setSelect={setSelect} />
      {loading ? (
        <Loading />
      ) : (
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
          <ListData presentData={presentData} pastData={pastData} />
        </>
      )}
    </>
  );
});

export default Home;
