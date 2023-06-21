import { AUTH_API } from "../axios";
import { loginFormArgs } from "../types/typesDef"



export const loginFunction = (formData: loginFormArgs) => {
  const response = AUTH_API.post("/", formData);
  return response;
};
