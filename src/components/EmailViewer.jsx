import React from "react";
import ReactHtmlParser from "react-html-parser";
import { useNavigate } from "react-router-dom";
import { downloadURL } from "../utils";
import { styled } from "@mui/material/styles";
import { Container, Typography, Button, Card } from "@mui/material";

const CustomHeaderCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
  padding: "2rem",
  flexWrap: "wrap",
  gap: "10px",
}));

const EmailCustomCard = styled(Card)(({ theme }) => ({
  padding: "2rem",
  marginBottom: "24px",
}));
const EmailCustomHeader = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "space-between",
  padding: "unset !important",
}));

const EmailCustomContent = styled(Container)(({ theme }) => ({
  border: "1px solid light-grey",
  borderStyle: "dotted",
  padding: "24px",
}));

const EmailViewer = ({ email, content }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };
  return (
    <Container maxWidth="md">
      <CustomHeaderCard>
        <Typography
          variant="h5"
          component="h1"
          sx={{ typography: { xs: "body1", md: "h5" } }}
        >
          Subject: {content.subject === "" ? "(no subject)" : content.subject}
        </Typography>
        <Button variant="contained" onClick={redirect}>
          Go Back
        </Button>
      </CustomHeaderCard>

      <EmailCustomCard maxWidth="md">
        <EmailCustomHeader>
          <Typography
            variant="h5"
            component="h1"
            sx={{ typography: { xs: "body1", md: "h5" } }}
          >
            Sender: {content.from}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ typography: { xs: "body2", md: "h5" } }}
          >
            Date: {content.date}
          </Typography>
        </EmailCustomHeader>

        <EmailCustomContent>
          <div>{ReactHtmlParser(content.body)}</div>

          {content.attachments && content.attachments.length > 0 && (
            <React.Fragment>
              <hr style={{ color: "white", backgroundColor: "white" }} />
              <div>
                {content.attachments.map((file, idx) => (
                  <p key={idx}>
                    <i style={{ color: "teal" }}></i>{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={downloadURL(email, content.id, file.filename)}
                    >
                      {file.filename}
                    </a>
                  </p>
                ))}
              </div>
            </React.Fragment>
          )}
        </EmailCustomContent>
      </EmailCustomCard>
    </Container>
  );
};

export default EmailViewer;
