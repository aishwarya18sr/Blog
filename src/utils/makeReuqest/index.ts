import axios from "axios";
import { BACKEND_URLS } from "../../constants/apiEndPoints";

const makeRequest = async (
  apiEndPoint: { url: string; method: string },
  dynamicConfig = {}
) => {
  const requestDetails = {
    url: `${BACKEND_URLS}${apiEndPoint.url}`,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
