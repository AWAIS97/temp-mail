export const getTempMailRequest = () => {
    return {
      type: "GET_TEMP_MAIL_REQUEST",
    };
  };
  
  export const getMailInboxRequest = (email) => {
    return {
      type: "GET_MAIL_INBOX_REQUEST",
      payload: email,
    };
  };
  export const getSingleEmail = (data) => {
    return {
      type: "GET_SINGLE_EMAIL",
      payload: data,
    };
  };