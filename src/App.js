import { useEffect, useState, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import AQIlist from "./components/HeaderAQIlist";
import MainCard from "./components/MainCard";
import MainDescribeArea from "./components/MainDescribeArea";
import { getAPIdata } from "./utils/Api";
import { aqiData, css } from "./utils/Data";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const city = useRef([]);
  const [currentCityName, setCurrentCityName] = useState("");
  const [currentCityAQI, setCurrentCityAQI] = useState([]);
  const currentCityData = useRef([]);
  const currentDate = useRef(null);

  useEffect(() => {
    getAPIdata().then((res) => {
      setApiData(res.records);
      setIsLoading(false);
    });
    if (apiData !== []) {
      const list = [];
      apiData.forEach((item) => {
        if (!list.includes(item.county)) {
          list.push(item.county);
        }
        city.current = list;
      });
      setCityData(city.current);
    }
  }, [apiData]);
  const handelChange = (e) => {
    setCurrentCityName(e.target.value);
  };
  useEffect(() => {
    const list = [];
    apiData.forEach((item) => {
      if (item.county === currentCityName) {
        let color = "";
        if (item.aqi <= 50) {
          color = "#95F084";
        } else if (item.aqi > 50 && item.aqi <= 100) {
          color = "#FFE695";
        } else if (item.aqi > 100 && item.aqi <= 150) {
          color = "#FFAF6A";
        } else if (item.aqi > 150 && item.aqi <= 200) {
          color = "#FF5757";
        } else if (item.aqi > 200 && item.aqi <= 300) {
          color = "#9777FF";
        } else if (item.aqi > 300 && item.aqi <= 400) {
          color = "#AD1774";
        }
        item.color = color;
        list.push(item);
      }
      currentCityData.current = list;
    });
    setCurrentCityAQI(currentCityData.current);
    currentDate.current = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
  }, [apiData, currentCityName]);
  return (
    <>
      {isLoading ? (
        <ClipLoader cssOverride={css} size={100} />
      ) : (
        <>
          <header>
            <div className="container header">
              <div>
                <h1>空氣品質指標(AQI)</h1>
                <select defaultValue={"請選擇地區"} onChange={handelChange}>
                  <option value="請選擇地區" disabled>
                    請選擇地區
                  </option>
                  {cityData.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <ul>
                {aqiData.map((item) => (
                  <AQIlist
                    key={item.number}
                    number={item.number}
                    describe={item.describe}
                    color={item.color}
                  />
                ))}
              </ul>
            </div>
          </header>
          {currentCityAQI.length === 0 ? (
            <p className="pickArea">請先選擇地區！</p>
          ) : (
            <main>
              <div className="container">
                <div className="city">
                  <p className="cityName">{currentCityName}</p>
                  <div className="line"></div>
                  <p>{currentDate.current} 更新</p>
                </div>
                <div className="describe d-flex">
                  <div
                    className="describe-card"
                    style={{ marginRight: "32px" }}
                  >
                    <div className="d-flex">
                      <div className="describe-name">
                        {currentCityAQI[0].sitename}
                      </div>
                      <div
                        className="describe-number"
                        style={{ background: currentCityAQI[0].color }}
                      >
                        {currentCityAQI[0].aqi}
                      </div>
                    </div>
                    <MainCard currentCityAQI={currentCityAQI[0]} />
                  </div>
                  <ul className="describe-area">
                    {currentCityAQI.map((item) => (
                      <MainDescribeArea
                        key={`${item.sitename}-${item.aqi}`}
                        sitename={item.sitename}
                        aqi={item.aqi}
                        color={item.color}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </main>
          )}
          <footer>
            <div className="container footer">
              <div>資料來源：行政院環境保護署</div>
              <div>Copyright © 2019 HexSchool. All rights reserved.</div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
