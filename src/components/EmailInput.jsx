import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";

const EmailInput = ({ email }) => {
  const [activeIcon, setActiveIcon] = useState(false);
  const copyToClipboard = () => {
    setActiveIcon(true);
    navigator.clipboard.writeText(email);

    setTimeout(() => {
      setActiveIcon(false);
    }, 2000);
  };

  return (
    <div className="row">
      <TextField
        label="Email"
        variant="outlined"
        value={email ? email : ""}
        readOnly
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={copyToClipboard}
              style={{ cursor: "pointer" }}
            >
              <Tooltip title={!activeIcon ? "Copy" : "Copied"}>
                <ContentCopyIcon style={{ color: activeIcon && "green" }} />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default EmailInput;
