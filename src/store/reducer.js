const initialState = {
  tempmail: "",
  mailList: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TEMP_MAIL_SUCCEEDED": {
      return {
        tempmail: action.response,
      };
    }
    case "GET_MAIL_INBOX_SUCCEEDED": {
      return {
        ...state,
        mailList: action.response,
      };
    }
    case "GET_SINGLE_EMAIL_SUCCEEDED": {
    }
    default:
      return state;
  }
};

export default Reducer;
