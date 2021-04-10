import { memo } from "react";

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
}) => {
  const onChangeSelect = (value, setter) => {
    if (value === "미선택") setter(undefined);
    else setter(value);
  };

  return (
    <header>
      {genderData && (
        <section>
          성별:
          <select
            onChange={({ target: { value } }) => {
              onChangeSelect(value, setGenderFilter);
            }}
          >
            <option value={undefined}>미선택</option>
            {genderData &&
              genderData.genderList.map((gender) => (
                <option key={gender}>{gender}</option>
              ))}
          </select>
        </section>
      )}
      <section>
        최소 나이:
        <select
          onChange={({ target: { value } }) => {
            onChangeSelect(value, setAgeMinFilter);
          }}
        >
          <option value={undefined}>미선택</option>
          {[...Array(112).keys()].map((i) => (
            <option key={i + 1}>{i + 1}</option>
          ))}
        </select>
      </section>
      <section>
        최대 나이:
        <select
          onChange={({ target: { value } }) => {
            onChangeSelect(value, setAgeMaxFilter);
          }}
        >
          <option value={undefined}>미선택</option>
          {[...Array(112).keys()].map((i) => (
            <option key={i + 1}>{i + 1}</option>
          ))}
        </select>
      </section>
      {ethnicityData && (
        <section>
          민족:
          <select
            onChange={({ target: { value } }) => {
              onChangeSelect(value, setEthnicityFilter);
            }}
          >
            <option value={undefined}>미선택</option>
            {ethnicityData.ethnicityList.map((ethnicity) => (
              <option key={ethnicity}>{ethnicity}</option>
            ))}
          </select>
        </section>
      )}
      {raceData && (
        <section>
          인종:
          <select
            onChange={({ target: { value } }) => {
              onChangeSelect(value, setRaceFilter);
            }}
          >
            <option value={undefined}>미선택</option>
            {raceData.raceList.map((race) => (
              <option key={race}>{race}</option>
            ))}
          </select>
        </section>
      )}
      <section>
        사망 여부:
        <select
          onChange={({ target: { value } }) => {
            onChangeSelect(value, setDeathFilter);
          }}
        >
          <option value={undefined}>미선택</option>
          <option>true</option>
          <option>false</option>
        </select>
      </section>
      <style jsx>{`
        header {
          border-bottom: 1px solid #cccccc;
        }

        header > section {
          display: inline-block;
          padding: 20px;
        }

        header > section > select {
          margin-left: 10px;
        }
      `}</style>
    </header>
  );
};

export default memo(PatientTableHeader);
