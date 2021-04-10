import { useCallback } from "react";

const PatientTableFilter = ({ title, setter, list, setPageIndex }) => {
  const onChangeSelect = useCallback((value) => {
    if (value === "미선택") setter(undefined);
    else setter(value);
    setPageIndex(1);
  }, []);

  return (
    <section>
      {title}:
      <select
        onChange={({ target: { value } }) => {
          onChangeSelect(value, setter);
        }}
      >
        <option value={undefined}>미선택</option>
        {list.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <style jsx>{`
        section {
          display: inline-block;
          padding: 0 20px 20px 0;
        }

        section > select {
          margin-left: 10px;
        }
      `}</style>
    </section>
  );
};

export default PatientTableFilter;
