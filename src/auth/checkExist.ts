import { api } from "../config/api";

export const checkExist = ({ phone, email }) => {
  const data = phone ? { phone_number: phone } : { personal_mail: email };
  return api
    .post("/auth/validate", data)
    .then((response: any) => {
      return {
        payload: response.payload,
        message: response.message,
      };
    })
    .catch((error) => error);
};
