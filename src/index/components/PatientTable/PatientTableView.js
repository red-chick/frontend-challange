import { useState } from "react";

const PatientTableView = ({ data, sortColumn, orderDesc }) => {
  const [patientDetails, setPatientDetails] = useState({});

  return (
    <main>
      {!data ? (
        <div>loading...</div>
      ) : (
        <table>
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
          {data.patient.list.map((patient) => (
            <>
              <tr
                key={patient.personID}
                data-id={patient.personID}
                onClick={(e) =>
                  onClickItem(e, patientDetails, setPatientDetails)
                }
              >
                <td>{patient.personID}</td>
                <td>{patient.gender}</td>
                <td>{patient.birthDatetime}</td>
                <td>{patient.age}</td>
                <td>{patient.race}</td>
                <td>{patient.ethnicity}</td>
                <td>{patient.isDeath.toString()}</td>
              </tr>
              {patientDetails[patient.personID] && (
                <tr className="detail">
                  <td>{patient.personID}</td>
                  <td>
                    방문 횟수:
                    <br />
                    {patientDetails[patient.personID].visitCount}
                  </td>
                  <td colSpan="5">
                    진단 정보:
                    <br />
                    {patientDetails[patient.personID].conditionList.map(
                      (condition, i) => (
                        <div>
                          {i + 1}. {condition}
                        </div>
                      )
                    )}
                  </td>
                </tr>
              )}
            </>
          ))}
        </table>
      )}
      <style jsx>{`
        main {
          padding: 10px;
          height: 450px;
          overflow: auto;
        }

        main > table {
          width: 100%;
          border-collapse: collapse;
        }

        main > table tr.detail {
          background: #eeeeee;
        }

        main > table td {
          padding: 10px;
          text-align: center;
        }

        main > div {
          width: 100%;
        }
      `}</style>
    </main>
  );
};

const PatientTableTh = ({ name, column, sortColumn, orderDesc }) => {
  return (
    <th data-column={column}>
      {name}
      {column && sortColumn === column && (orderDesc ? " ↑" : " ↓")}
      <style jsx>{`
        th {
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </th>
  );
};

const onClickTr = (e) => {
  const { column } = e.target.dataset;
  if (column) {
    if (column === sortColumn) {
      setOrderDesc(!orderDesc);
    } else {
      setSortColumn(column);
      setOrderDesc(false);
    }
  }
};

const onClickItem = async (e, patientDetails, setPatientDetails) => {
  const { id } = e.target.parentNode.dataset;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/patient/brief/${id}`
  );
  const data = await response.json();
  const newPatientDetails = { ...patientDetails };
  newPatientDetails[id] = data;
  setPatientDetails(newPatientDetails);
};

export default PatientTableView;
