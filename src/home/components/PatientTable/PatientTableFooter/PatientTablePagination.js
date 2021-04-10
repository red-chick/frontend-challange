const PatientTablePagination = ({ data, pageIndex, rowSize, setPageIndex }) => {
  return (
    <>
      {pageIndex > 1 && (
        <button className="prev" onClick={() => setPageIndex((i) => i - 1)}>
          ← Prev
        </button>
      )}
      <select
        value={pageIndex}
        onChange={(e) => setPageIndex(Number(e.target.value))}
      >
        {data ? (
          [...Array(Math.ceil(data.patient.totalLength / rowSize)).keys()]
            .map((i) => i + 1)
            .map((i) => <option key={i}>{i}</option>)
        ) : (
          <option>{pageIndex}</option>
        )}
      </select>
      {data && pageIndex < Math.ceil(data.patient.totalLength / rowSize) && (
        <button className="next" onClick={() => setPageIndex((i) => i + 1)}>
          Next →
        </button>
      )}
      <style jsx>{`
        button.prev {
          margin-right: 20px;
        }

        button.next {
          margin-left: 20px;
        }
      `}</style>
    </>
  );
};

export default PatientTablePagination;
