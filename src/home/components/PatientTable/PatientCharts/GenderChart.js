import { useMemo } from "react";

import PieChart from "../../../../common/components/PieChart";

const getGenderCount = (stats, genderList) => {
  return stats.reduce((acc, cur) => {
    const newAcc = [...acc];
    const index = genderList.indexOf(cur.gender);
    if (newAcc[index] === undefined) newAcc[index] = 0;
    newAcc[index] += cur.count;
    return newAcc;
  }, []);
};

const getData = (stats, genderList) => {
  return {
    labels: genderList,
    datasets: [
      {
        label: "성별 환자 수",
        data: getGenderCount(stats, genderList),
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

const GenderChart = ({ stats, genderList }) => {
  const data = useMemo(() => getData(stats, genderList), [stats]);
  return <PieChart data={data} />;
};

export default GenderChart;
