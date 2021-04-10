import { useMemo } from "react";

import PieChart from "../../../../common/components/PieChart";

const getRaceCount = (stats, raceList) => {
  return stats.reduce((acc, cur) => {
    const newAcc = [...acc];
    const index = raceList.indexOf(cur.race);
    if (newAcc[index] === undefined) newAcc[index] = 0;
    newAcc[index] += cur.count;
    return newAcc;
  }, []);
};

const getData = (stats, raceList) => {
  return {
    labels: raceList,
    datasets: [
      {
        label: "인종 환자 수",
        data: getRaceCount(stats, raceList),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
};

const RaceChart = ({ stats, raceList }) => {
  const data = useMemo(() => getData(stats, raceList), [stats]);
  return <PieChart data={data} />;
};

export default RaceChart;
