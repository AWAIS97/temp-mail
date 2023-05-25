import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const CustomEmailModal = ({
  customEmailModal,
  setCustomEmailModal,
  getAnotherEmail,
}) => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("1secmail.com");
  const [error, setError] = useState(false);
  const invalidName = [
    "abuse",
    "webmaster",
    "contact",
    "postmaster",
    "hostmaster",
    "admin",
  ];

  const onSubmit = (email, domain) => {
    email = email.trim();
    if (email !== "" && !invalidName.includes(email.toLowerCase())) {
      getAnotherEmail(`${email}@${domain}`);
      setCustomEmailModal(false);
      setEmail(false);
    } else {
      setError(true);
    }
  };

  const domainsArr = [
    "1secmail.com",
    "1secmail.org",
    "1secmail.net",
    "wwjmp.com",
    "esiix.com",
  ];
  return (
    <Dialog open={customEmailModal}>
      <DialogTitle>Custom Email</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Invalid names: abuse, webmaster, contact, postmaster, hostmaster,
          admin.
        </DialogContentText>
        <TextField
          autoFocus
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          sx={{ margin: "1rem 0rem" }}
        />
        <Select
          fullWidth
          value={domain}
          label="Domain"
          onChange={(e) => setDomain(e.target.value)}
        >
          {domainsArr.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setCustomEmailModal(false);
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button onClick={() => onSubmit(email, domain)} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomEmailModal;
