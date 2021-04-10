import PatientTableItemDetail from "./PatientTableItemDetail";

const PatientTableItem = ({
  patient: { personID, gender, birthDatetime, age, race, ethnicity, isDeath },
  patientDetails,
  onClickItem,
}) => {
  return (
    <>
      <tr key={personID} data-id={personID} onClick={onClickItem}>
        <td>{personID}</td>
        <td>{gender}</td>
        <td>{birthDatetime}</td>
        <td>{age}</td>
        <td>{race}</td>
        <td>{ethnicity}</td>
        <td>{isDeath.toString()}</td>
        <style jsx>{`
          tr {
            cursor: pointer;
          }
          tr:hover {
            background: #eeeeee;
          }
          td {
            padding: 10px;
            text-align: center;
          }
        `}</style>
      </tr>
      {patientDetails[personID] && (
        <PatientTableItemDetail
          id={personID}
          detail={patientDetails[personID]}
        />
      )}
    </>
  );
};

export default PatientTableItem;
