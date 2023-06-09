import React, { useState, useEffect } from "react";
import { deleteTempEmail, getTempMail } from "../utils";
import { connect } from "react-redux";
import EmailInput from "./EmailInput";
import { getTempMailRequest } from "../store/actions";
import CustomEmailModal from "./CustomEmailModal";
import { styled } from "@mui/material/styles";
import { Container, Typography, Button, Card } from "@mui/material";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "4rem",
}));

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "2rem",
  gap: "15px",
}));

const ButtonsContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
}));

const EmailContainer = (props) => {
  const { tempMail, getTempMailRequest } = props;
  const [currentEmail, setCurrentEmail] = useState("");
  const [customEmailModal, setCustomEmailModal] = useState(false);
  const localEmail = localStorage.getItem("tempMail");

  useEffect(() => {
    !localEmail && getTempMailRequest();
  }, []);

  useEffect(() => {
    let saved = localStorage.getItem("savedDate");
    const savedEmail = localStorage.getItem("tempMail");
    let date = new Date().getDate();
    if (
      saved &&
      (date !== parseInt(saved) || (tempMail && savedEmail !== tempMail))
    ) {
      localStorage.clear();
    }
    tempMail && localStorage.setItem("tempMail", tempMail);
    localStorage.setItem("savedDate", date);
    const email = localStorage.getItem("tempMail");
    email && setCurrentEmail(email);
  }, [tempMail]);

  const getAnotherEmail = (customEmail) => {
    customEmail && setCurrentEmail(customEmail);
    deleteTempEmail(currentEmail);
    localStorage.setItem("tempMail", customEmail);
  };

  const getNewEmail = () => {
    getTempMailRequest();
  };

  const deleteHandler = () => {
    if (window.confirm("Are you sure you wish to delete this email?")) {
      deleteTempEmail(currentEmail);
      getTempMailRequest();
    }
  };

  return (
    <>
      <CustomContainer maxWidth="sm">
        <CustomCard>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Your Temporary Email Address
          </Typography>
          <EmailInput email={currentEmail} />
          <ButtonsContainer>
            <Button variant="contained" color="success" onClick={getNewEmail}>
              Get New Email
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => setCustomEmailModal(true)}
            >
              Custom Email
            </Button>

            <Button variant="contained" color="error" onClick={deleteHandler}>
              Delete
            </Button>
          </ButtonsContainer>
          {/* <EmailModal handler={getAnotherEmail} /> */}
          <Typography variant="body2" component="p" align="center">
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </Typography>
        </CustomCard>
      </CustomContainer>
      <CustomEmailModal
        getAnotherEmail={getAnotherEmail}
        customEmailModal={customEmailModal}
        setCustomEmailModal={setCustomEmailModal}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tempMail: state.tempmail,
  };
};

const mapDispatchToProps = {
  getTempMailRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer);
