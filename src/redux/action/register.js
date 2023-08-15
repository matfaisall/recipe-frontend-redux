import axios from "axios";
import Swal from "sweetalert2";

const register = (form, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "AUTH_REGISTER_PENDING",
    });
    const result = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/register`,
      form
    );

    dispatch({
      type: "AUTH_REGISTER_SUCCESS",
      payload: result.data.data,
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Account is successfully created.",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "AUTH_REGISTER_FAILED",
      payload: error.response.data.message,
    });
  }
};

export default register;
