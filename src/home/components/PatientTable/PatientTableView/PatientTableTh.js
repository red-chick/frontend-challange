const PatientTableTh = ({ name, column, sortColumn, orderDesc }) => {
  return (
    <th data-column={column}>
      {name}
      {column && sortColumn === column && (orderDesc ? " ↑" : " ↓")}
      <style jsx>{`
        th {
          padding: 20px 10px;
          text-align: center;
        }
      `}</style>
    </th>
  );
};

export default PatientTableTh;
