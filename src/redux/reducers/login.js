const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "AUTH_LOGIN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };

    case "AUTH_LOADING_FAILED":
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
      };

    default:
      return {
        state,
      };
  }
};

export default loginReducer;
