const PatientTableRowSize = ({ rowSize, setPageIndex, setRowSize }) => {
  return (
    <>
      Row Size:
      <select
        value={rowSize}
        onChange={(e) => {
          setPageIndex(1);
          setRowSize(Number(e.target.value));
        }}
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
      </select>
      <style jsx>{`
        select {
          margin-left: 15px;
        }
      `}</style>
    </>
  );
};

export default PatientTableRowSize;
