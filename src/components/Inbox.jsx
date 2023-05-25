import React, { useEffect, useState } from "react";
import { getSingleEmail } from "../utils";
import EmailViewer from "./EmailViewer";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Inbox = (props) => {
  const { tempMail } = props;
  const email = tempMail;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [emailContent, setEmailContent] = useState({});

  useEffect(() => {
    getSingleEmail(email, id).then((e) => setEmailContent(e));
  }, [email]);

  return <EmailViewer content={emailContent} email={email} />;
};

const mapStateToProps = (state) => {
  return {
    tempMail: state.tempmail,
  };
};

export default connect(mapStateToProps, null)(Inbox);
