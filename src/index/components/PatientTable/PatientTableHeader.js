import useRequest from "../../../common/hooks/useRequest";

const PatientTableHeader = ({
  setGenderFilter,
  setRaceFilter,
  setEthnicityFilter,
  setAgeMinFilter,
  setAgeMaxFilter,
  setDeathFilter,
}) => {
  const { data: ethnicityData } = useRequest(`/ethnicity/list`);
  const { data: genderData } = useRequest(`/gender/list`);
  const { data: raceData } = useRequest(`/race/list`);

  const onChangeSelect = (value, setter) => {
    if (value === "미선택") setter(undefined);
    else setter(value);
  };

  return (
    <header>
      {genderData && (
        <>
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
        </>
      )}
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
      {ethnicityData && (
        <>
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
        </>
      )}
      {raceData && (
        <>
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
        </>
      )}
      <>
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
      </>
      <style jsx>{`
        header {
          padding: 20px;
          border-bottom: 1px solid #cccccc;
        }
      `}</style>
    </header>
  );
};

export default PatientTableHeader;
