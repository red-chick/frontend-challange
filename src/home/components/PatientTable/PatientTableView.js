import { useCallback, useState } from "react";

import PatientTableItem from "./PatientTableView/PatientTableItem";
import PatientTableTh from "./PatientTableView/PatientTableTh";

const PatientTableView = ({
  data,
  sortColumn,
  setSortColumn,
  orderDesc,
  setOrderDesc,
}) => {
  const [patientDetails, setPatientDetails] = useState({});

  const onClickTr = useCallback(
    (e) => {
      const { column } = e.target.dataset;
      if (column) {
        if (column === sortColumn) {
          setOrderDesc(!orderDesc);
        } else {
          setSortColumn(column);
          setOrderDesc(false);
        }
      }
    },
    [sortColumn, orderDesc]
  );

  const onClickItem = useCallback(
    async (e) => {
      const { id } = e.target.parentNode.dataset;

      if (patientDetails[id]) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/patient/brief/${id}`
      );
      const data = await response.json();

      const newPatientDetails = { ...patientDetails };
      newPatientDetails[id] = data;

      setPatientDetails(newPatientDetails);
    },
    [patientDetails]
  );

  return (
    <main>
      {!data ? (
        <div>로딩중입니다...</div>
      ) : (
        <table>
          <thead>
            <tr onClick={onClickTr}>
              <PatientTableTh
                name="환자 ID"
                column="person_id"
                sortColumn={sortColumn}
                orderDesc={orderDesc}
              />
              <PatientTableTh
                name="성별"
                column="gender"
                sortColumn={sortColumn}
                orderDesc={orderDesc}
              />
              <PatientTableTh
                name="생년월일"
                column="birth"
                sortColumn={sortColumn}
                orderDesc={orderDesc}
              />
              <PatientTableTh name="나이" />
              <PatientTableTh
                name="인종"
                column="race"
                sortColumn={sortColumn}
                orderDesc={orderDesc}
              />
              <PatientTableTh
                name="민족"
                column="ethnicity"
                sortColumn={sortColumn}
                orderDesc={orderDesc}
              />
              <PatientTableTh
                name="사망 여부"
                column="death"
                sortColumn={sortColumn}
                orderDesc={orderDesc}
              />
            </tr>
          </thead>
          <tbody>
            {data.patient.list.map((patient) => (
              <PatientTableItem
                key={patient.personID}
                patient={patient}
                patientDetails={patientDetails}
                onClickItem={onClickItem}
              />
            ))}
          </tbody>
        </table>
      )}
      <style jsx>{`
        main {
          padding: 0;
          height: 450px;
          overflow: auto;
        }

        main > table {
          width: 100%;
          border-collapse: collapse;
        }

        main > div {
          width: 100%;
        }
      `}</style>
    </main>
  );
};

export default PatientTableView;
