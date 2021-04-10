import { useMemo } from "react";
import PieChart from "../../../../common/components/PieChart";
import { getMixTwoString } from "../../../../common/utils";

const getGenderAndRaceCount = (stats, genderAndRaceList) => {
  console.log("genderAndRaceList", genderAndRaceList);
  return stats.reduce((acc, cur) => {
    const newAcc = [...acc];
    const index = genderAndRaceList.indexOf(
      getMixTwoString(cur.gender, cur.race)
    );
    if (newAcc[index] === undefined) newAcc[index] = 0;
    newAcc[index] += cur.count;
    return newAcc;
  }, []);
};

const getData = (stats, genderAndRaceList) => {
  return {
    labels: genderAndRaceList,
    datasets: [
      {
        label: "(성별 + 민족)별 환자 수",
        data: getGenderAndRaceCount(stats, genderAndRaceList),
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

const GenderAndRaceChart = ({ stats, genderAndRaceList }) => {
  const data = useMemo(() => getData(stats, genderAndRaceList), [stats]);
  return <PieChart data={data} />;
};

export default GenderAndRaceChart;
