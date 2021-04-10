import { memo } from "react";

import PatientTableFilter from "./PatientTableHeader/PatientTableFilter";

const PatientTableHeader = ({
  ethnicityData,
  genderData,
  raceData,
  setGenderFilter,
  setRaceFilter,
  setEthnicityFilter,
  setAgeMinFilter,
  setAgeMaxFilter,
  setDeathFilter,
  setPageIndex,
}) => {
  return (
    <header>
      {genderData && (
        <PatientTableFilter
          title="성별"
          list={genderData.genderList}
          setter={setGenderFilter}
          setPageIndex={setPageIndex}
        />
      )}
      <PatientTableFilter
        title="최소 나이"
        list={[...Array(112).keys()].map((v) => v + 1)}
        setter={setAgeMinFilter}
        setPageIndex={setPageIndex}
      />
      <PatientTableFilter
        title="최대 나이"
        list={[...Array(112).keys()].map((v) => v + 1)}
        setter={setAgeMaxFilter}
        setPageIndex={setPageIndex}
      />
      {ethnicityData && (
        <PatientTableFilter
          title="민족"
          list={ethnicityData.ethnicityList}
          setter={setEthnicityFilter}
          setPageIndex={setPageIndex}
        />
      )}
      {raceData && (
        <PatientTableFilter
          title="인종"
          list={raceData.raceList}
          setter={setRaceFilter}
          setPageIndex={setPageIndex}
        />
      )}
      <PatientTableFilter
        title="사망 여부"
        list={[true, false]}
        setter={setDeathFilter}
        setPageIndex={setPageIndex}
      />
      <style jsx>{`
        header {
          border-bottom: 1px solid #cccccc;
        }
      `}</style>
    </header>
  );
};

export default memo(PatientTableHeader);
