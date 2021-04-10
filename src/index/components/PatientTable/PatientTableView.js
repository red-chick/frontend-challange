const PatientTableView = ({
  data,
  sortColumn,
  setSortColumn,
  orderDesc,
  setOrderDesc,
}) => {
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
            <tr key={patient.personID}>
              <td>{patient.personID}</td>
              <td>{patient.gender}</td>
              <td>{patient.birthDatetime}</td>
              <td>{patient.age}</td>
              <td>{patient.race}</td>
              <td>{patient.ethnicity}</td>
              <td>{patient.isDeath.toString()}</td>
            </tr>
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

export default PatientTableView;
