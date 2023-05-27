import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const CustomContainer = styled(`footer`)(({ theme }) => ({
  backgroundColor: "#1976d2",
  color: "#fff",
  height: "10rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  flexWrap:'wrap'
}));

const CustomLogo = styled("div")(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  background: "#1a486e",
  padding: "4px",
  borderRadius: 10,
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
}));

const Footer = () => {
  const navigate = useNavigate();

  return (
    <CustomContainer>
      <CustomLogo>
        <MailIcon fontSize="large" sx={{ mr: 1 }} />
        <CustomTypography
          variant="h6"
          component="div"
          onClick={() => navigate("/")}
        >
          Temp Mail
        </CustomTypography>
      </CustomLogo>

      <div>
        <Typography variant="body2">&copy; Copyright 2023 Temp Mail</Typography>
      </div>
      <div>
        <Button color="inherit" onClick={() => navigate("/blog")}>
          Blog
        </Button>

        <Button color="inherit" onClick={() => navigate("/about")}>
          About
        </Button>
        {/* <Button color="inherit" onClick={() => {}}>
          Login
        </Button> */}
      </div>
    </CustomContainer>
  );
};

export default Footer;
