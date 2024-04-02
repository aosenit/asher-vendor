import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../api";

interface UseFetchDataOptions {
  key: string;
  variables?: Array<string | number | undefined>;
  endpoint: string;
}

const useFetchData = ({ key, endpoint }: UseFetchDataOptions) => {
  const { data, status, error } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      try {
        const response = await axios.get(`${baseUrl}${endpoint}`);
        if (response.status !== 200) {
          throw new Error();
        }

        return response.data.result;
      } catch (error: any) {
        throw new Error(`An error has occurred: ${error?.message}`);
      }
    },
  });

  return { data, status, error };
};

export default useFetchData;
