import React, { useEffect } from "react";
import EmailContainer from "./EmailContainer";
import EmailList from "./EmailList";
import QuestionsList from "./QuestionsList";
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "4rem 2rem",
}));

const Home = () => {
  return (
    <>
      <EmailContainer />
      <EmailList />
      <CustomContainer>
        <div style={{ width: "100%", maxWidth: 600 }}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            What is Disposable Temporary E-mail?
          </Typography>
          <Typography variant="body2" align="center">
            Disposable email - is a free email service that allows to receive
            email at a temporary address that self-destructed after a certain
            time elapses. It is also known by names like : tempmail,
            10minutemail, 10minmail, throwaway email, fake-mail , fake email
            generator, burner mail or trash-mail. Many forums, Wi-Fi owners,
            websites and blogs ask visitors to register before they can view
            content, post comments or download something. Temp-Mail - is most
            advanced throwaway email service that helps you avoid spam and stay
            safe.
          </Typography>
        </div>
      </CustomContainer>
      <QuestionsList />
    </>
  );
};

export default Home;
