import { memo } from "react";

import PatientTablePagination from "./PatientTableFooter/PatientTablePagination";
import PatientTableRowSize from "./PatientTableFooter/PatientTableRowSize";

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
        <PatientTablePagination
          data={data}
          pageIndex={pageIndex}
          rowSize={rowSize}
          setPageIndex={setPageIndex}
        />
      </section>
      <section className="right">
        <PatientTableRowSize
          rowSize={rowSize}
          setPageIndex={setPageIndex}
          setRowSize={setRowSize}
        />
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

export default memo(PatientTableFooter);
