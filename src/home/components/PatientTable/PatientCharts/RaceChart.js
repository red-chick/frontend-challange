import { useMemo } from "react";

import { getChartData, getStatsCount } from "../../../utils/chart";

import PieChart from "../../../../common/components/PieChart";

const RaceChart = ({ stats, raceList }) => {
  const counts = useMemo(() => getStatsCount(stats, raceList, "race"), [stats]);
  const data = useMemo(() => getChartData("인종별 환자 수", raceList, counts), [
    stats,
  ]);
  return <PieChart data={data} />;
};

export default RaceChart;
