const PatientTableItemDetail = ({
  id,
  detail: { visitCount, conditionList },
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        방문 횟수:
        <br />
        {visitCount}
      </td>
      <td colSpan="5">
        진단 정보:
        <br />
        {conditionList.map((condition, i) => (
          <div key={i + condition}>
            {i + 1}. {condition}
          </div>
        ))}
      </td>
      <style jsx>{`
        tr {
          background: #f6f6f6;
        }

        td {
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </tr>
  );
};

export default PatientTableItemDetail;
