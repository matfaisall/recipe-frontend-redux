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
    localStorage.setItem("name", result.data.data.name);
    localStorage.setItem("email", result.data.data.email);
    localStorage.setItem("photo", result.data.data.photo);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You are successfully logged in.",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({
      type: "AUTH_LOGIN_SUCCESS",
      payload: result.data.data,
    });
    navigate("/");
    window.location.reload();
  } catch (err) {
    console.log(err);
    dispatch({
      type: "ATUH_LOGIN_FAILED",
      payload: err.response.data.message,
    });
  }
};
