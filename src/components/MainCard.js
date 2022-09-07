function MainCard(currentCityAQI) {
  return (
    <>
      <ul className="card">
        <li>
          <div>
            臭氧
            <span>
              O<small>3</small> (ppb)
            </span>
          </div>
          <div>{currentCityAQI.o3}</div>
        </li>
        <li>
          <div>
            懸浮微粒
            <span>
              PM<small>10</small> (μg/m³)
            </span>
          </div>
          <div>{currentCityAQI.pm10}</div>
        </li>
        <li>
          <div>
            細懸浮微粒
            <span>
              PM<small>2.5</small> (μg/m³)
            </span>
          </div>
          <div>{currentCityAQI["pm2.5"]}</div>
        </li>
        <li>
          <div>
            一氧化碳<span>CO (ppm)</span>
          </div>
          <div>{currentCityAQI.co}</div>
        </li>
        <li>
          <div>
            二氧化硫
            <span>
              SO<small>2</small> (ppb)
            </span>
          </div>
          <div>{currentCityAQI.so2}</div>
        </li>
        <li>
          <div>
            二氧化氮
            <span>
              NO<small>2</small> (ppb)
            </span>
          </div>
          <div>{currentCityAQI.no2}</div>
        </li>
      </ul>
    </>
  );
}
export default MainCard;
