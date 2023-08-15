const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "AUTH_REGISTER_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case "AUTH_REGISTER_FAILED":
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

export default registerReducer;
