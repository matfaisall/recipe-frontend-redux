import axios from "axios";

export const login = (form, handleSuccess) => {
  return {
    type: "LOGIN",
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/auth/login`, form)
        .then((response) => {
          console.log("ini response login", response.data);
          handleSuccess(response.data);
          resolve(response);
        })
        .catch((error) => reject(error));
    }),
  };
};
