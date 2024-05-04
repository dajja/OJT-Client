import publicAxios from "../../config/publicAxios";
import { API_LOGIN, API_LOGIN_FACEBOOK, API_LOGIN_GOOGLE, API_MAILER, API_REGISTER, API_RESET_PASSWORD } from "../patchApi";
export const loginApi = async (body) => {
  console.log(body);
  try {
    const response = await publicAxios.post(API_LOGIN, body);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const registerApi = async (body) => {
  console.log(body);
  try {
    const response = await publicAxios.post(API_REGISTER, body);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const loginGoogle = async (body) => {
  try {
    const response = await publicAxios.post(API_LOGIN_GOOGLE, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const loginFacebook = async (body) => {
  try {
    const response = await publicAxios.post(API_LOGIN_FACEBOOK, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const mailerApi = async (body) => {
  console.log(body)
  try {
    const response = await publicAxios.post(API_MAILER, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const resetPassword = async (body) => {
  try {
    const response = await publicAxios.post(API_RESET_PASSWORD, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

