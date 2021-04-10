const getMixTwoString = (str1, str2) => {
  return `${str1}+${str2}`;
};

export const getMixTwoArray = (arr1, arr2) => {
  const results = [];
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      results.push(getMixTwoString(item1, item2));
    });
  });
  return results;
};

export const getStatsCount = (stats, labels, labelKey) => {
  return stats.reduce((acc, cur) => {
    const newAcc = [...acc];

    const key = Array.isArray(labelKey)
      ? getMixTwoString(cur[labelKey[0]], cur[labelKey[1]])
      : cur[labelKey];

    const index = labels.indexOf(key);

    if (newAcc[index] === undefined) newAcc[index] = 0;
    newAcc[index] += cur.count;

    return newAcc;
  }, []);
};

export const getChartData = (label, labels, data) => {
  return {
    labels: labels,
    datasets: [
      {
        label,
        data,
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
