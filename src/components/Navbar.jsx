import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            style={{ cursor: "pointer", flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Temp Mail
          </Typography>

          <Button color="inherit" onClick={() => navigate("/blog")}>
            Blog
          </Button>

          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          {/* <Button color="inherit" onClick={() => {}}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
