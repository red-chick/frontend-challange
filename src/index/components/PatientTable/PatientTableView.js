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
            <th data-column="person_id">
              환자 ID
              {sortColumn === "person_id" && (orderDesc ? " ↑" : " ↓")}
            </th>
            <th data-column="gender">
              성별
              {sortColumn === "gender" && (orderDesc ? " ↑" : " ↓")}
            </th>
            <th data-column="birth">
              생년월일
              {sortColumn === "birth" && (orderDesc ? " ↑" : " ↓")}
            </th>
            <th>나이</th>
            <th data-column="race">
              인종
              {sortColumn === "race" && (orderDesc ? " ↑" : " ↓")}
            </th>
            <th data-column="ethnicity">
              민족
              {sortColumn === "ethnicity" && (orderDesc ? " ↑" : " ↓")}
            </th>
            <th data-column="death">
              사망 여부
              {sortColumn === "death" && (orderDesc ? " ↑" : " ↓")}
            </th>
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

        main > table th,
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

export default PatientTableView;
