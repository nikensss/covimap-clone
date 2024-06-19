const GeneralInformation = () => {
  return (
    <>
      <h2 className="title">COVID-19 Tracker</h2>
      <ul className="caseDetailsList">
        <li className="textLeft">
          <h6>Total Case</h6>
          <p>581511314</p>
          <b>+607496</b>
        </li>
        <li className="textLeft">
          <h6>Active Case</h6>
          <p>581511314</p>
        </li>
        <li className="textLeft">
          <h6>Recovered Case</h6>
          <p>581511314</p>
          <b>+0</b>
        </li>
        <li className="textLeft">
          <h6>Deaths Case</h6>
          <p>581511314</p>
          <b>+0</b>
        </li>
      </ul>
    </>
  );
};

export default GeneralInformation;
