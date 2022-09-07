function MainDescribeArea({sitename, aqi, color}) {
  return (
    <>
      <li className="describe-card d-flex" style={{ marginBottom: "32px" }}>
        <div className="describe-name">{sitename}</div>
        <div className="describe-number" style={{ background: color }}>
          {aqi}
        </div>
      </li>
    </>
  );
}
export default MainDescribeArea;
