import React, { useEffect, useState } from "react";
import { getMailInboxRequest } from "../store/actions";
import EmailTable from "./EmailTable";
import { connect } from "react-redux";

const EmailList = (props) => {
  const { mailList, tempMail, getMailInboxRequest } = props;
  const email = tempMail || localStorage.getItem( 'tempMail' );;
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([]);
  }, [email]);

  useEffect(() => {
    mailList && setList(mailList);
  }, [mailList]);

  useEffect(() => {
    const interval = setInterval(() => {
      email && getMailInboxRequest(email);
    }, 5000);

    return () => clearInterval(interval);
  });

  return <EmailTable list={list} />;
};

const mapStateToProps = (state) => {
  return {
    tempMail: state.tempmail,
    mailList: state.mailList,
  };
};

const mapDispatchToProps = {
  getMailInboxRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
