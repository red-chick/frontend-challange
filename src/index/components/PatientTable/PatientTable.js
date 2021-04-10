import { useState } from "react";
import useRequest from "../../../common/hooks/useRequest";
import PatientTableFooter from "./PatientTableFooter";
import PatientTableView from "./PatientTableView";

const PatientTable = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [rowSize, setRowSize] = useState(10);
  const [sortColumn, setSortColumn] = useState("person_id");
  const [orderDesc, setOrderDesc] = useState(false);
  const { data, error } = useRequest(
    `/patient/list?page=${pageIndex}&length=${rowSize}&order_column=${sortColumn}&order_desc=${orderDesc}`
  );

  if (error) {
    console.error(error);
    return (
      <section className="container">
        에러가 발생하였습니다. 잠시 후 다시 시도해주세요.
        <style jsx>{`
          .container {
            width: 80%;
            padding: 240px 0;
            border: 1px solid #cccccc;
            border-radius: 8px;
            text-align: center;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="container">
      <PatientTableView
        data={data}
        sortColumn={sortColumn}
        setSortColumn={setSortColumn}
        orderDesc={orderDesc}
        setOrderDesc={setOrderDesc}
      />
      <PatientTableFooter
        data={data}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        rowSize={rowSize}
        setRowSize={setRowSize}
      />
      <style jsx>{`
        .container {
          width: 80%;
          border: 1px solid #cccccc;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default PatientTable;
