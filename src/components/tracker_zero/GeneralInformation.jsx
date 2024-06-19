const GeneralInformation = () => {
  return (
    <>
      <h2 className="font-bold text-darkBlue text-2xl my-2 leading-tight">
        COVID-19 Tracker
      </h2>
      <ul className="list-none">
        <li className="bg-chiffon p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent ">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Total Case
          </h6>
          <p className="text-2xl text-steel font-semibold leading-6 float-right">
            581511314
          </p>
          <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
            +607496
          </b>
        </li>
        <li className="bg-chiffon p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent ">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Active Case
          </h6>
          <p className="text-2xl text-steel font-semibold leading-6 float-right">
            581511314
          </p>
        </li>
        <li className="bg-chiffon p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent ">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Recovered Case
          </h6>
          <p className="text-2xl text-steel font-semibold leading-6 float-right">
            581511314
          </p>
          <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
            +0
          </b>
        </li>
        <li className="bg-chiffon p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent ">
          <h6 className="text-base font-semibold text-navyBlue inline-block">
            Deaths Case
          </h6>
          <p className="text-2xl text-steel font-semibold leading-6 float-right">
            581511314
          </p>
          <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
            +0
          </b>
        </li>
      </ul>
    </>
  );
};

export default GeneralInformation;
