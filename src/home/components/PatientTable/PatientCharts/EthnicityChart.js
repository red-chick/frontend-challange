import { useMemo } from "react";

import { getChartData, getStatsCount } from "../../../utils/chart";

import PieChart from "../../../../common/components/PieChart";

const EthnicityChart = ({ stats, ethnicityList }) => {
  const counts = useMemo(
    () => getStatsCount(stats, ethnicityList, "ethnicity"),
    [stats]
  );
  const data = useMemo(
    () => getChartData("민족별 환자 수", ethnicityList, counts),
    [stats]
  );
  return <PieChart data={data} />;
};

export default EthnicityChart;
