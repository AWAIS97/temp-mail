import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Container, Typography, Toolbar, Button } from "@mui/material";

const CustomContainer = styled(`footer`)(({ theme }) => ({
  backgroundColor: "#1976d2",
  color: "#fff",
  height: "10rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding:'1rem'
}));

const Footer = () => {
  const navigate = useNavigate();

  return (
    <CustomContainer>
      <div>
        <Typography
          variant="h6"
          component="div"
          style={{ cursor: "pointer", flexGrow: 1 }}
          onClick={() => navigate("/")}
        >
          Temp Mail
        </Typography>
      </div>
      <div>
        <Typography>&copy; Copyright 2023 Temp Mail</Typography>
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
