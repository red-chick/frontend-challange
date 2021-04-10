import { useMemo } from "react";

import { getChartData, getStatsCount } from "../../../utils/chart";

import PieChart from "../../../../common/components/PieChart";

const GenderChart = ({ stats, genderList }) => {
  const counts = useMemo(() => getStatsCount(stats, genderList, "gender"), [
    stats,
  ]);
  const data = useMemo(() => getChartData("성별 환자 수", genderList, counts), [
    stats,
  ]);
  return <PieChart data={data} />;
};

export default GenderChart;
