const PatientTableFooter = ({
  data,
  pageIndex,
  setPageIndex,
  rowSize,
  setRowSize,
}) => {
  return (
    <footer>
      <section className="left">
        {pageIndex > 1 && (
          <button onClick={() => setPageIndex((i) => i - 1)}>Prev</button>
        )}
        <select
          value={pageIndex}
          onChange={(e) => setPageIndex(Number(e.target.value))}
        >
          {data ? (
            [
              ...Array(Math.ceil(data.patient.totalLength / rowSize)).keys(),
            ].map((i) => <option key={i + 1}>{i + 1}</option>)
          ) : (
            <option>{pageIndex}</option>
          )}
        </select>
        {data && pageIndex < Math.ceil(data.patient.totalLength / rowSize) && (
          <button onClick={() => setPageIndex((i) => i + 1)}>Next</button>
        )}
      </section>
      <section className="right">
        Row Size:{" "}
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
      </section>
      <style jsx>{`
        footer {
          padding: 20px;
          border-top: 1px solid #cccccc;
        }

        footer > section {
          display: inline-block;
        }

        footer > section.right {
          float: right;
        }
      `}</style>
    </footer>
  );
};

export default PatientTableFooter;
