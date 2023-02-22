import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { BACKEND_URL } from "../../constants/apiEndPoints";
import { ERROR_ROUTE } from "../../constants/routes";

const makeRequest = async (
  apiEndPoint: { url: string; method: string },
  dynamicConfig = {},
  navigate?: NavigateFunction
) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e: any) {
    if (navigate) {
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
  }
};

export default makeRequest;
