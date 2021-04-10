import useRequest from "../../../../common/hooks/useRequest";
import { getMixTwoArray } from "../../../../common/utils";
import EthnicityChart from "./EthnicityChart";
import GenderAndRaceChart from "./GenderAndRaceChart";
import GenderAndEthnicityChart from "./GenderAndEthnicityChart";
import GenderChart from "./GenderChart";
import RaceChart from "./RaceChart";
import { memo } from "react";

const PatientChart = ({
  ethnicityData,
  genderData,
  raceData,
  genderFilter,
  raceFilter,
  ethnicityFilter,
}) => {
  const { data, error } = useRequest("/patient/stats");

  if (error) return <div>에러가 발생하였습니다.</div>;
  if (!data || !ethnicityData || !genderData || !raceData) {
    return <div>로딩중입니다...</div>;
  }

  const { genderList } = genderData;
  const { raceList } = raceData;
  const { ethnicityList } = ethnicityData;

  let stats = [...data.stats];

  // TODO: 나이, 사망 여부 필터링은 그래프에 반영할 수가 없는데 기획 의도와 동일한지 확인 필요
  if (genderFilter) {
    stats = stats.filter((stat) => stat.gender === genderFilter);
  }
  if (raceFilter) {
    stats = stats.filter((stat) => stat.race === raceFilter);
  }
  if (ethnicityFilter) {
    stats = stats.filter((stat) => stat.ethnicity === ethnicityFilter);
  }

  return (
    <section className="container">
      <section>
        <GenderChart stats={stats} genderList={genderList} />
      </section>
      <section>
        <RaceChart stats={stats} raceList={raceList} />
      </section>
      <section>
        <EthnicityChart stats={stats} ethnicityList={ethnicityList} />
      </section>
      <section>
        <GenderAndRaceChart
          stats={stats}
          genderAndRaceList={getMixTwoArray(genderList, raceList)}
        />
      </section>
      <section>
        <GenderAndEthnicityChart
          stats={stats}
          genderAndEthnicityList={getMixTwoArray(genderList, ethnicityList)}
        />
      </section>
      <style jsx>{`
        .container {
          border-bottom: 1px solid #cccccc;
        }

        .container > section {
          display: inline-block;
          width: 20%;
        }
      `}</style>
    </section>
  );
};

export default memo(PatientChart);
