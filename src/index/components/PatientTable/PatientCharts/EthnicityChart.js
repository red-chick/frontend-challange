import { useMemo } from "react";
import PieChart from "../../../../common/components/PieChart";

const getEthnicityCount = (stats, ethnicityList) => {
  return stats.reduce((acc, cur) => {
    const newAcc = [...acc];
    const index = ethnicityList.indexOf(cur.ethnicity);
    if (newAcc[index] === undefined) newAcc[index] = 0;
    newAcc[index] += cur.count;
    return newAcc;
  }, []);
};

const getData = (stats, ethnicityList) => {
  return {
    labels: ethnicityList,
    datasets: [
      {
        label: "민족 환자 수",
        data: getEthnicityCount(stats, ethnicityList),
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

const EthnicityChart = ({ stats, ethnicityList }) => {
  const data = useMemo(() => getData(stats, ethnicityList), [stats]);
  return <PieChart data={data} />;
};

export default EthnicityChart;
