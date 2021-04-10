import { useMemo } from "react";

import { getChartData, getStatsCount } from "../../../utils/chart";

import PieChart from "../../../../common/components/PieChart";

const GenderAndEthnicityChart = ({ stats, genderAndEthnicityList }) => {
  const counts = useMemo(
    () => getStatsCount(stats, genderAndEthnicityList, ["gender", "ethnicity"]),
    [stats]
  );
  const data = useMemo(
    () =>
      getChartData("(성별 + 인종)별 환자 수", genderAndEthnicityList, counts),
    [stats]
  );
  return <PieChart data={data} />;
};

export default GenderAndEthnicityChart;
