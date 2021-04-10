export const getMixTwoArray = (arr1, arr2) => {
  const results = [];
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      results.push(getMixTwoString(item1, item2));
    });
  });
  return results;
};

export const getMixTwoString = (str1, str2) => {
  return `${str1}+${str2}`;
};
