import useRequest from "../../../../common/hooks/useRequest";
import { getMixTwoArray } from "../../../../common/utils";
import EthnicityChart from "./EthnicityChart";
import GenderAndRaceChart from "./GenderAndRaceChart";
import GenderAndEthnicityChart from "./GenderAndEthnicityChart";
import GenderChart from "./GenderChart";
import RaceChart from "./RaceChart";

const PatientChart = ({ ethnicityData, genderData, raceData }) => {
  const { data, error } = useRequest("/patient/stats");

  if (error) return <div>에러가 발생하였습니다.</div>;
  if (!data || !ethnicityData || !genderData || !raceData) {
    return <div>로딩중입니다...</div>;
  }

  const { ethnicityList } = ethnicityData;
  const { genderList } = genderData;
  const { raceList } = raceData;

  const { stats } = data;

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

export default PatientChart;
