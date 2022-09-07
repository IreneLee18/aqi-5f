function AQIlist({number,describe,color}) {
  return (
    <>
        <li>
          <div style={{ background: color }}>{number}</div>
          {describe.length < 5 ? (
            <div className="shortDescribe">{describe}</div>
          ) : (
            <div className="longDescribe">
              <span>{describe.substring(0, 5)}</span>
              <span>{describe.substring(5, 9)}</span>
            </div>
          )}
        </li>
    </>
  );
}
export default AQIlist;