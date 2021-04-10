import useSwr from "swr";

const baseUrl = "http://49.50.167.136:9871/api";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useRequest = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const { data, error } = useSwr(baseUrl + path, fetcher);

  return { data, error };
};

export default useRequest;
