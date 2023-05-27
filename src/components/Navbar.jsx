import React from "react";
import {
  Button,
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";

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

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
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
          <div style={{ display: "flex", gap: "10px" }}>
            <Button color="inherit" onClick={() => navigate("/blog")}>
              Blog
            </Button>

            <Button color="inherit" onClick={() => navigate("/about")}>
              About
            </Button>
          </div>
          {/* <Button color="inherit" onClick={() => {}}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
