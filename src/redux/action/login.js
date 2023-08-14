import axios from "axios";
import Swal from "sweetalert2";

export const login = (form, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "AUTH_LOGIN_PANDING",
    });
    const result = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      form
    );

    // console.log(result.data.data);
    localStorage.setItem("token", result.data.data.token);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({
      type: "AUTH_LOGIN_SUCCESS",
      payload: result.data.data,
    });
    navigate("/");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "ATUH_LOGIN_FAILED",
      payload: err.response.data.message,
    });
  }
  // type: "LOGIN",
  // payload: new Promise((resolve, reject) => {
  //   axios
  //     .post(`${import.meta.env.VITE_BASE_URL}/auth/login`, form)
  //     .then((response) => {
  //       console.log("ini response login", response.data);
  //       handleSuccess(response.data);
  //       resolve(response);
  //     })
  //     .catch((error) => reject(error));
  // }),
};
