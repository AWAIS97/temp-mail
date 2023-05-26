import React, { useEffect, useState } from "react";
import { getSingleEmail } from "../utils";
import EmailViewer from "./EmailViewer";
import { connect } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";

const Inbox = (props) => {
  const { tempMail } = props;
  const email = tempMail || localStorage.getItem("tempMail");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [emailContent, setEmailContent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }
  }, [id]);

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
