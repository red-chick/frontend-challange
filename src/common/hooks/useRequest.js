import useSwr from "swr";

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useRequest = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const { data, error } = useSwr(baseUrl + path, fetcher);

  return { data, error };
};

export default useRequest;
