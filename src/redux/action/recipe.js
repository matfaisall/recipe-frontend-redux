import axios from "axios";
import Swal from "sweetalert2";
const url = import.meta.env.VITE_BASE_URL;

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const getMenuDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DETAIL_MENU_PENDING" });
    const result = await axios.get(url + `/recipe/${id}`, { headers });
    dispatch({ payload: result.data, type: "DETAIL_MENU_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response, type: "DETAIL_MENU_FAILED" });
    console.log(err);
  }
};

export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MENU_PENDING" });
    const result = await axios.get(url + `/recipe`, { headers });
    dispatch({ payload: result.data, type: "GET_MENU_SUCCESS" });
  } catch (err) {
    dispatch({ payload: err.response, type: "GET_MENU_FAILED" });
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Sorry, Please reload",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const searchMenu = (search, sort, page) => async (dispatch) => {
  try {
    dispatch({ type: "GET_MENU_PENDING" });
    const result = await axios.get(
      url +
        `/recipe/searchdata?search=${search}&searchBy=title&limit=5&page=${page}&sortBy=${sort}`,
      {
        headers,
      }
    );
    dispatch({ payload: result.data, type: "GET_MENU_SUCCESS" });
  } catch (err) {
    dispatch({ payload: err.response, type: "GET_MENU_FAILED" });
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Sorry, Please reload",
      showConfirmButton: false,
      timer: 2500,
    });
  }
};

export const postMenu = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "POST_MENU_PENDING" });
    const result = await axios.post(url + `/recipe`, data, { headers });
    console.log("/list-recipe");
    dispatch({ payload: result.data.data, type: "POST_MENU SUCCESS" });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Recipe added successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/list-recipe");
  } catch (error) {
    console.log(error);
    dispatch({ payload: error.response, type: "POST_MENU_FAILED" });
  }
};

export const updateMenu = (data, id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "PUT_MENU_PENDING" });
    const result = await axios.put(url + `/recipe/${id}`, data, { headers });
    console.log(result);
    dispatch({ payload: result.data.data, type: "PUT_MENU_SUCCESS" });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Recipe updated successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/list-recipe");
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "PUT_MENU_FAILED" });
    console.log(err);
  }
};

export const deleteMenu = (id, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_MENU_PENDING",
    });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    const result = await axios.delete(url + `/recipe/${id}`, { headers });

    navigate("/list-recipe");
    dispatch({ payload: result.data.data, type: "DELETE_MENU_SUCCESS" });
  } catch (error) {
    dispatch({
      payload: err.response.data.message,
      type: "DELETE_MENU_FAILED",
    });
    console.log(err);
  }
};
