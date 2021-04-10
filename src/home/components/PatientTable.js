import { useState } from "react";

import useRequest from "../../common/hooks/useRequest";

import PatientChart from "./PatientTable/PatientCharts";
import PatientTableFooter from "./PatientTable/PatientTableFooter";
import PatientTableHeader from "./PatientTable/PatientTableHeader";
import PatientTableView from "./PatientTable/PatientTableView";

const getRequestUrl = (
  pageIndex,
  rowSize,
  sortColumn,
  orderDesc,
  genderFilter,
  raceFilter,
  ethnicityFilter,
  ageMinFilter,
  ageMaxFilter,
  deathFilter
) => {
  let requestUrl = `/patient/list?page=${pageIndex}&length=${rowSize}&order_column=${sortColumn}&order_desc=${orderDesc}`;

  if (genderFilter) requestUrl += `&gender=${genderFilter}`;
  if (raceFilter) requestUrl += `&race=${raceFilter}`;
  if (ethnicityFilter) requestUrl += `&ethnicity=${ethnicityFilter}`;
  if (ageMinFilter) requestUrl += `&age_min=${Number(ageMinFilter) - 1}`;
  if (ageMaxFilter) requestUrl += `&age_max=${Number(ageMaxFilter) + 1}`;
  if (deathFilter)
    requestUrl += `&death=${deathFilter === "true" ? true : false}`;

  return requestUrl;
};

const PatientTable = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [rowSize, setRowSize] = useState(10);
  const [sortColumn, setSortColumn] = useState("person_id");
  const [orderDesc, setOrderDesc] = useState(false);

  const [genderFilter, setGenderFilter] = useState(undefined);
  const [raceFilter, setRaceFilter] = useState(undefined);
  const [ethnicityFilter, setEthnicityFilter] = useState(undefined);
  const [ageMinFilter, setAgeMinFilter] = useState(undefined);
  const [ageMaxFilter, setAgeMaxFilter] = useState(undefined);
  const [deathFilter, setDeathFilter] = useState(undefined);

  const { data, error } = useRequest(
    getRequestUrl(
      pageIndex,
      rowSize,
      sortColumn,
      orderDesc,
      genderFilter,
      raceFilter,
      ethnicityFilter,
      ageMinFilter,
      ageMaxFilter,
      deathFilter
    )
  );

  const { data: ethnicityData } = useRequest(`/ethnicity/list`);
  const { data: genderData } = useRequest(`/gender/list`);
  const { data: raceData } = useRequest(`/race/list`);

  if (error) {
    return (
      <section className="container">
        에러가 발생하였습니다. 잠시 후 다시 시도해주세요.
      </section>
    );
  }

  return (
    <section className="container">
      <PatientTableHeader
        ethnicityData={ethnicityData}
        genderData={genderData}
        raceData={raceData}
        setGenderFilter={setGenderFilter}
        setRaceFilter={setRaceFilter}
        setEthnicityFilter={setEthnicityFilter}
        setAgeMinFilter={setAgeMinFilter}
        setAgeMaxFilter={setAgeMaxFilter}
        setDeathFilter={setDeathFilter}
        setPageIndex={setPageIndex}
      />
      <PatientChart
        ethnicityData={ethnicityData}
        genderData={genderData}
        raceData={raceData}
        genderFilter={genderFilter}
        raceFilter={raceFilter}
        ethnicityFilter={ethnicityFilter}
      />
      <PatientTableView
        data={data}
        sortColumn={sortColumn}
        setSortColumn={setSortColumn}
        orderDesc={orderDesc}
        setOrderDesc={setOrderDesc}
      />
      <PatientTableFooter
        data={data}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        rowSize={rowSize}
        setRowSize={setRowSize}
      />
      <style jsx>{`
        .container {
          display: inline-block;
          width: 100%;
          border: 1px solid #cccccc;
          border-radius: 8px;
          text-align: left;
        }
      `}</style>
    </section>
  );
};

export default PatientTable;
