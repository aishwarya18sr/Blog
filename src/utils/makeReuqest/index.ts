import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";

const makeRequest = async (
  apiEndPoint: { url: string; method: string },
  dynamicConfig = {}
) => {
  const requestDetails = {
    url: `${BACKEND_URL}${apiEndPoint.url}`,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
