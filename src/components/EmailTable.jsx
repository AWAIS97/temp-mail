import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const EmptyContainer = styled(Container)(({ theme }) => ({
  padding: "4rem",
}));
const CustomTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "#1976d2",
  color: "white",
}));
const CustomTableCell = styled(TableCell)(({ theme }) => ({
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
}));

const EmailTable = ({ list }) => {
  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  };

  return (
    <Container maxWidth="md">
      <Card>
        <TableContainer>
          <Table>
            <CustomTableHead>
              <TableRow>
                <CustomTableCell align="left">From</CustomTableCell>
                <CustomTableCell align="left">Subject</CustomTableCell>
                <CustomTableCell align="right">Date</CustomTableCell>
              </TableRow>
            </CustomTableHead>
            <TableBody>
              {list?.length > 0 &&
                list.map((val) => (
                  <TableRow
                    key={val.id}
                    onClick={() => redirect(`/inbox?id=${val.id}`)}
                    className="email-row"
                  >
                    <TableCell align="left">{val.from}</TableCell>
                    <TableCell align="left">{val.subject}</TableCell>
                    <TableCell align="right">{val.date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <EmptyContainer>
            {!list.length && (
              <>
                <Typography variant="h4" component="h1" align="center">
                  Inbox is Empty!
                </Typography>
                <Typography variant="body2" component="p" align="center">
                  Waiting for incoming emails
                </Typography>
              </>
            )}
          </EmptyContainer>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default EmailTable;
