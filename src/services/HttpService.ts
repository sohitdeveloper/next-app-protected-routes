import axios from "axios";
import { getTokenLocal } from "../utils/common";
const HTTPService = async (
  method: string,
  url: any,
  data: any,
  isFormData?: any,
  isAuthorization?: any,
  jwttoken?: any,
  // @ts-ignore
  withCredentials?: any
) => {
  if (method == "GET") {
    return await axios({
      method,
      url,
      params: data,
      headers: authHeader(isFormData, isAuthorization, jwttoken),
    });
  } else {
    return await axios({
      method,
      url,
      data,
      headers: authHeader(isFormData, isAuthorization, jwttoken),
    });
  }
};
const authHeader = (isFormData: any, isAuthorization: any, jwttoken: any) => {
  let token = jwttoken;
  if (!token) {
    token = getTokenLocal();
  }
  if (isAuthorization) {
    if (isFormData) {
      return {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "content-type": "multipart/form-data",
      };
    } else {
      return {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
    }
  } else {
    if (isFormData) {
      return {
        "Content-Type": "application/json",
        "content-type": "multipart/form-data",
      };
    } else {
      return { Accept: "application/json", "Content-Type": "application/json" };
    }
  }
};
export default HTTPService;
