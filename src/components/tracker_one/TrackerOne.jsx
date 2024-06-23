import { useState } from "react";
import Card, { CardTitle, CardData, CardImage } from "../card/Card";
import { TotalCases } from "./TotalCases";
import { TotalDeaths } from "./TotalDeaths";
import "./trackerOne.css";

const TrackerOne = () => {
  const [data, setData] = useState({
    totalCases: 31415926,
    totalDeaths: 31415927,
  });

  setInterval(() => {
    setData({
      totalCases: (Math.random() * 100000000).toFixed(0),
      totalDeaths: (Math.random() * 100000000).toFixed(0),
    });
  }, 1200);

  return (
    <div
      id="rigthContent"
      className="overflow-hidden block absolute w-3/5 bg-[#f7f8fc] left-[500px];
  outline: none;"
    >
      <div
        id="containerSelector"
        className="items-center justify-between flex mb-[30px] pb-[15px] border-b-[rgba(0,0,0,0.1)] border-b border-solid;"
      >
        <div className="countrySelectBox">
          <select>
            <option value="AL">Albania</option>
            <option value="AL">Albania</option>
          </select>
          <div className="countryPicker"></div>
        </div>
        <div id="updapteOn" className="text-black font-medium text-base;">
          Updated: June 5, 2022
        </div>
      </div>
      <div id="row" className="flex flex-wrap mr-[-15px] ml-[-15px];">
        <div
          id="rightInfo"
          className="flex flex-wrap mr-[-15px] ml-[-15px] px-[15px];"
        >
          <TotalCases>{data.totalCases}</TotalCases>
          <TotalDeaths>{data.totalDeaths}</TotalDeaths>
          <Card>
            <CardImage src={"/assets/icons/covid-green.svg"} />
            <CardTitle>Total Recovered</CardTitle>
            <CardData className="text-brightGreen">86503057</CardData>
          </Card>
          <Card>
            <CardImage src={"/assets/icons/covid-blue.svg"} />
            <CardTitle>Total Active</CardTitle>
            <CardData className="text-electricBlue">86503057</CardData>
          </Card>
          <Card>
            <CardImage src={"/assets/icons/covid-orange.svg"} />
            <CardTitle>New Cases</CardTitle>
            <CardData className="text-brightOrange">86503057</CardData>
          </Card>
          <Card>
            <CardImage src={"/assets/icons/covid-redark.svg"} />
            <CardTitle>New Deaths</CardTitle>
            <CardData className="text-patataBlue">86503057</CardData>
          </Card>
        </div>
        <div className="Mapa"></div>
      </div>
    </div>
  );
};

export default TrackerOne;

