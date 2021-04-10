import { useMemo } from "react";

import { getMixTwoString } from "../../../../common/utils";

import PieChart from "../../../../common/components/PieChart";

const getGenderAndEthnicityCount = (stats, genderAndEthnicityList) => {
  return stats.reduce((acc, cur) => {
    const newAcc = [...acc];
    const index = genderAndEthnicityList.indexOf(
      getMixTwoString(cur.gender, cur.ethnicity)
    );
    if (newAcc[index] === undefined) newAcc[index] = 0;
    newAcc[index] += cur.count;
    return newAcc;
  }, []);
};

const getData = (stats, genderAndEthnicityList) => {
  return {
    labels: genderAndEthnicityList,
    datasets: [
      {
        label: "(성별 + 인종)별 환자 수",
        data: getGenderAndEthnicityCount(stats, genderAndEthnicityList),
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

const GenderAndEthnicityChart = ({ stats, genderAndEthnicityList }) => {
  const data = useMemo(() => getData(stats, genderAndEthnicityList), [stats]);
  return <PieChart data={data} />;
};

export default GenderAndEthnicityChart;
