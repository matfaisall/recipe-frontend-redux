const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const delete_menuReducer = (state = initialState, action) => {
  if (action.type === "DELETE_MENU_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "DELETE_MENU_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "DELETE_MENU_FAILED") {
    return {
      ...state,
      data: null,
      errorMessage: action.payload,
      isLoading: false,
      isError: true,
    };
  } else {
    return state;
  }
};

export default delete_menuReducer;
