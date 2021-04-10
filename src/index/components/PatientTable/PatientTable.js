import { useState } from "react";

import useRequest from "../../../common/hooks/useRequest";

import PatientTableFooter from "./PatientTableFooter";
import PatientTableHeader from "./PatientTableHeader";
import PatientTableView from "./PatientTableView";

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

  let requestUrl = `/patient/list?page=${pageIndex}&length=${rowSize}&order_column=${sortColumn}&order_desc=${orderDesc}`;
  if (genderFilter) requestUrl += `&gender=${genderFilter}`;
  if (raceFilter) requestUrl += `&race=${raceFilter}`;
  if (ethnicityFilter) requestUrl += `&ethnicity=${ethnicityFilter}`;
  if (ageMinFilter) requestUrl += `&age_min=${Number(ageMinFilter) - 1}`;
  if (ageMaxFilter) requestUrl += `&age_max=${Number(ageMaxFilter) + 1}`;
  if (deathFilter)
    requestUrl += `&death=${deathFilter === "true" ? true : false}`;

  const { data, error } = useRequest(requestUrl);

  if (error) {
    console.error(error);
    return (
      <section className="container">
        에러가 발생하였습니다. 잠시 후 다시 시도해주세요.
        <style jsx>{`
          .container {
            width: 80%;
            padding: 240px 0;
            border: 1px solid #cccccc;
            border-radius: 8px;
            text-align: center;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="container">
      <PatientTableHeader
        setGenderFilter={setGenderFilter}
        setRaceFilter={setRaceFilter}
        setEthnicityFilter={setEthnicityFilter}
        setAgeMinFilter={setAgeMinFilter}
        setAgeMaxFilter={setAgeMaxFilter}
        setDeathFilter={setDeathFilter}
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
          width: 80%;
          border: 1px solid #cccccc;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default PatientTable;