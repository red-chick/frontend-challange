import { useMemo } from "react";

import { getChartData, getStatsCount } from "../../../utils/chart";

import PieChart from "../../../../common/components/PieChart";

const GenderAndRaceChart = ({ stats, genderAndRaceList }) => {
  const counts = useMemo(
    () => getStatsCount(stats, genderAndRaceList, ["gender", "race"]),
    [stats]
  );
  const data = useMemo(
    () => getChartData("(성별 + 민족)별 환자 수", genderAndRaceList, counts),
    [stats]
  );
  return <PieChart data={data} />;
};

export default GenderAndRaceChart;
